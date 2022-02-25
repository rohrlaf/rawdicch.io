import { app, BrowserWindow } from 'electron';

function createWindow() {
  const mainWindow = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
