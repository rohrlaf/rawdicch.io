import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('Rawdicchio', {
  fileAccess: {
    getFiles: () => ipcRenderer.invoke('app:get-files'),
    openDialog: () => ipcRenderer.invoke('app:on-fs-dialog-open'),
  },
});
