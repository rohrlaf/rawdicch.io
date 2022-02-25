import { app, BrowserWindow } from 'electron';
import isDev from 'electron-is-dev';
import installExtension, {
  REACT_DEVELOPER_TOOLS,
} from 'electron-devtools-installer';

const createWindow = (): void => {
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  window.loadURL(
    isDev ? 'http://localhost:3000' : `file://${app.getAppPath()}/index.html`,
  );
};
app.commandLine.appendArgument('disable-gpu');

app
  .on('ready', createWindow)
  .whenReady()
  .then(() => {
    if (isDev) {
      installExtension(REACT_DEVELOPER_TOOLS)
        .then((name: string) => console.log(`Added Extension:  ${name}`))
        .catch((err: unknown) => console.log('An error occurred: ', err));
    }
  });
