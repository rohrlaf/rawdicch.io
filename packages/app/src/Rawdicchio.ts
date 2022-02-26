export interface Rawdicchio {
  fileAccess: {
    getFiles: () => Promise<unknown>;
    openDialog: () => Promise<unknown>;
  };
}

declare global {
  interface Window {
    Rawdicchio: Rawdicchio;
  }
}

export default window.Rawdicchio;
