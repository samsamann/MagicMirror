import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';

let win;
const args = process.argv.slice(1);
const dev = args.some(val => val === '--dev' || val === '-d');

function createWindow() {

  const size = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, './app/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win.webContents.openDevTools();
}

try {
  if (dev) {
    require('electron-reload')(__dirname);
  }

  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    app.quit();
  });

} catch (e) {
  // Catch Error
  // throw e;
}
