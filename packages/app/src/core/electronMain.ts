import { app, BrowserWindow, protocol, session } from 'electron';
import path from 'path';

import { registerCatalog } from '../catalog/Catalog';

const windowUrl = app.isPackaged
  ? `file://${path.join(__dirname, '../dist/index.html')}`
  : `http://localhost:3000`;

const createWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      // webSecurity: false,
    },
    width: 1200,
  });

  mainWindow.loadURL(windowUrl);
  mainWindow.setTitle('rawdicch.io');

  mainWindow.webContents.openDevTools();

  return mainWindow;
};

process.on('SIGINT', () => {
  app.quit();
});

app
  .on('ready', () => {
    if (!app.isPackaged) {
      session.defaultSession.webRequest.onHeadersReceived(
        (details, callback) => {
          callback({
            responseHeaders: {
              ...details.responseHeaders,
              'Content-Security-Policy': ["default-src 'self'"],
            },
          });
        },
      );
    }

    createWindow();
  })
  .whenReady()
  .then(() => {
    protocol.registerFileProtocol('file', (request, callback) => {
      const pathname = decodeURIComponent(request.url.replace('file:///', ''));
      callback(pathname);
    });
  });

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

registerCatalog();
