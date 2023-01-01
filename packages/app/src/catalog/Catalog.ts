import { dialog, ipcMain, ipcRenderer, Notification } from 'electron';
import { PrismaClient } from '@prisma/client';
import path from 'path';

export interface CatalogClient {
  getFiles: () => Promise<string[]>;
  openDialog: () => Promise<void>;
}

export type Catalog = {
  name?: string;
  created?: number;
  modified?: number;
  images: string[];
};

// TODO: close DB connection
const prisma = new PrismaClient();

const addFiles = (files: string[] = []) => {
  files?.forEach(async (file) => {
    await prisma.photos.create({
      data: {
        created_at: new Date(),
        filename: path.basename(file),
        filetype: path.extname(file),
        height: 0,
        imported_at: new Date(),
        path: file,
        width: 0,
      },
    });
  });

  notifyFilesAdded(files?.length);
};

const getFiles = async () => {
  const files = await prisma.photos.findMany();

  return files?.map((file: { path: string }) => file.path);
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
