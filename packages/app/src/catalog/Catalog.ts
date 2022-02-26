import { dialog, ipcMain, ipcRenderer, Notification } from 'electron';
import { PrismaClient } from '@prisma/client';

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

// TODO: close DB connection
const prisma = new PrismaClient();

const addFiles = (files: string[] = []) => {
  files?.forEach(async (file) => {
    await prisma.photo.create({
      data: { path: file },
    });
  });

  notifyFilesAdded(files?.length);
};

const getFiles = async () => {
  const files = await prisma.photo.findMany();

  return files?.map((file) => file.path);
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

// let prisma: PrismaClient;

export const registerCatalog = () => {
  ipcMain.handle('catalog:get-files', getFiles);
  ipcMain.handle('catalog:import-files-dialog', importFiles);
};

export const exposeCatalog: CatalogClient = {
  getFiles: () => ipcRenderer.invoke('catalog:get-files'),
  openDialog: () => ipcRenderer.invoke('catalog:import-files-dialog'),
};
