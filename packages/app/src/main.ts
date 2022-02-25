import { app, BrowserWindow } from 'electron';

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 800,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 1200,
  });

  mainWindow.loadURL('http://localhost:3000');
  mainWindow.setTitle('rawdicch.io');

  mainWindow.webContents.openDevTools();
};

app.on('ready', () => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

process.on('SIGINT', () => {
  app.quit();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
