const { app, BrowserWindow, ipcMain, shell } = require('electron');
const url = require('url');
const path = require('path');

let win;

app.on('ready', () => {

    win = new BrowserWindow();
    win.maximize()
    win.loadURL("http://localhost:3000/");
    win.setMenu(null);



    win.on('closed', () => {
        win = null;
        app.quit();
    })

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
})

