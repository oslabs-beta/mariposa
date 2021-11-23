import { app, BrowserWindow } from 'electron';
const path = require('path')
const url = require('url');
// const electronReload = require('electron-reload');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      // enableRemoteModule: true,
    }
  })

  win.loadFile('../dist/index.html')
  // win.loadURL('localhost')
}

// Will be called when Electron has finished initialization
app.whenReady().then(() => createWindow());

// Quit when all windows are closed, except for MacOS (darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

// On macOS it's common to re-create a window in the app when the
// dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
});