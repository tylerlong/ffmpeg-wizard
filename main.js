import { app, BrowserWindow, shell } from 'electron'
import { autoUpdater } from 'electron-updater'
import electronLog from 'electron-log'

import { setApplicationMenu } from './menu'

// check for updates
electronLog.transports.file.level = 'info'
autoUpdater.logger = electronLog
autoUpdater.checkForUpdatesAndNotify()
setInterval(() => {
  autoUpdater.checkForUpdatesAndNotify()
}, 3600000) // check for updates every hour

let mainWindow
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 600,
    height: 800,
    webPreferences: {
      nodeIntegration: false
    }
  })

  // Open the DevTools.
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('close', function (event) {
    if (mainWindow.forceClose) {
      return
    }
    event.preventDefault()
    mainWindow.hide()
  })

  mainWindow.webContents.on('new-window', (event, url) => {
    event.preventDefault()
    shell.openExternal(url) // open new window in external browser
  })
}

app.on('ready', () => {
  setApplicationMenu()
  createWindow()
})

app.on('activate', function () {
  mainWindow.show()
})

app.on('before-quit', () => {
  mainWindow.forceClose = true
})
