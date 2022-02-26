import { app, BrowserWindow } from 'electron';
import path from 'path';

import { registerFileAccess, watchFiles } from './Files/FileAccess';

const windowUrl = app.isPackaged
  ? `file://${path.join(__dirname, '../dist/index.html')}`
  : `http://localhost:3000`;

const createWindow = (): BrowserWindow => {
  const mainWindow = new BrowserWindow({
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
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

app.on('ready', () => {
  const window = createWindow();

  watchFiles(window);
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

registerFileAccess();
