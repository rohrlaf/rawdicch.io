import { dialog, ipcMain, ipcRenderer, Notification } from 'electron';
import {
  ensureDirSync,
  ensureFileSync,
  readFileSync,
  writeFileSync,
} from 'fs-extra';
import os from 'os';
import path from 'path';

export interface CatalogClient {
  getFiles: () => Promise<string[]>;
  openDialog: () => Promise<unknown>;
}

export type Catalog = {
  name?: string;
  created?: number;
  modified?: number;
  images: string[];
};

const appDir = path.resolve(os.homedir(), '.rawdicchio');
const catalogFile = path.resolve(appDir, 'catalog.json');

const addFiles = (files: string[] = []) => {
  ensureDirSync(appDir);
  ensureFileSync(catalogFile);

  if (files?.length > 0) {
    let catalog: Catalog = { images: [] };

    try {
      const file = readFileSync(catalogFile, 'utf8');
      catalog = JSON.parse(file) as Catalog;
      catalog.images = [...catalog.images, ...files];
      writeFileSync(catalogFile, JSON.stringify(catalog));
    } catch (error) {
      catalog.images = files;
      console.log('Catalog getFiles', error);
    }
  }

  notifyFilesAdded(files?.length);
};

const getFiles = async () => {
  ensureDirSync(appDir);
  ensureFileSync(catalogFile);

  let catalog: Catalog = { images: [] };

  try {
    const file = readFileSync(catalogFile, 'utf8');
    catalog = JSON.parse(file) as Catalog;
  } catch (error) {
    console.log('Catalog getFiles', error);
  }

  return catalog.images;
};

const importFiles = () => {
  const files = dialog.showOpenDialogSync({
    properties: ['openFile', 'multiSelections'],
  });

  addFiles(files);
};

const notifyFilesAdded = (size: number) => {
  new Notification({
    title: 'Files added',
    body: `${size} file(s) has been successfully added.`,
  }).show();
};

export const registerCatalog = () => {
  ipcMain.handle('catalog:get-files', getFiles);
  ipcMain.handle('catalog:import-files-dialog', importFiles);
};

export const exposeCatalog: CatalogClient = {
  getFiles: () => ipcRenderer.invoke('catalog:get-files'),
  openDialog: () => ipcRenderer.invoke('catalog:import-files-dialog'),
};
