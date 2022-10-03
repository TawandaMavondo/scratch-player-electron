export type Channels = "ipc-example";

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        node();
        chrome();
        electron();
      };
    };
  }
}

export {};
