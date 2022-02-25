import { BrowserWindow, ipcMain, Notification } from 'electron';
import chokidar from 'chokidar';
import fs from 'fs-extra';
import open from 'open';
import * as path from 'path';
import * as os from 'os';

// source: https://medium.com/jspoint/working-with-files-i-o-in-an-electron-application-b4d2de403f54

// local dependencies
// const notification = require('./notification');

// get application directory
const appDir = path.resolve(os.homedir(), 'electron-app-files');

// display files added notification
export const filesAdded = (size: number) => {
  const notif = new Notification({
    title: 'Files added',
    body: `${size} file(s) has been successfully added.`,
  });

  notif.show();
};

/****************************/

// get the list of files
export const getFiles = () => {
  const files = fs.readdirSync(appDir);

  return files.map((filename: string) => {
    const filePath = path.resolve(appDir, filename);
    const fileStats = fs.statSync(filePath);

    return {
      name: filename,
      path: filePath,
      size: Number(fileStats.size / 1000).toFixed(1), // kb
    };
  });
};

/****************************/

// add files
export const addFiles = (files: { name: string; path: string }[] = []) => {
  // ensure `appDir` exists
  fs.ensureDirSync(appDir);

  // copy `files` recursively (ignore duplicate file names)
  files.forEach((file) => {
    const filePath = path.resolve(appDir, file.name);

    if (!fs.existsSync(filePath)) {
      fs.copyFileSync(file.path, filePath);
    }
  });

  // display notification
  // notification.filesAdded(files.length);
};

// delete a file
export const deleteFile = (filename: string) => {
  const filePath = path.resolve(appDir, filename);

  // remove file from the file system
  if (fs.existsSync(filePath)) {
    fs.removeSync(filePath);
  }
};

// open a file
export const openFile = (filename: string) => {
  const filePath = path.resolve(appDir, filename);

  // open a file using default application
  if (fs.existsSync(filePath)) {
    open(filePath);
  }
};

/*-----*/

// watch files from the application's storage directory
export const watchFiles = (win: BrowserWindow) => {
  chokidar.watch(appDir).on('unlink', (filepath) => {
    win.webContents.send('app:delete-file', path.parse(filepath).base);
  });
};
