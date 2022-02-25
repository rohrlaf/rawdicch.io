import { contextBridge, ipcRenderer } from 'electron';

import type { Listener, Unsubscribe } from './appRuntime';

contextBridge.exposeInMainWorld('appRuntime', {
  send: (channel: string, data: unknown) => {
    ipcRenderer.send(channel, data);
  },
  subscribe: (channel: string, listener: Listener): Unsubscribe => {
    const subscription = (_: unknown, ...args: unknown[]) => listener(...args);
    ipcRenderer.on(channel, subscription);

    return () => {
      ipcRenderer.removeListener(channel, subscription);
    };
  },
});
