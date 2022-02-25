export type Unsubscribe = () => void;
export type Listener = (...args: unknown[]) => Promise<unknown>;

export interface AppRuntime {
  send: (channel: string, data: unknown) => void;
  subscribe: (channel: string, listener: Listener) => Unsubscribe;
}

declare global {
  interface Window {
    appRuntime: AppRuntime;
  }
}

export default window.appRuntime;
