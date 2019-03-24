const { app, BrowserWindow, ipcMain, shell } = require('electron');
const url = require('url');
const path = require('path');

let win;

app.on('ready', () => {

    win = new BrowserWindow({
        width: 1600,
        height: 700,
        icon:'icons/icon.png'
    });

    win.loadURL("http://localhost:3000/");
    win.setMenu(null);

   

    win.on('closed',()=>{
        win=null;
        app.quit();
    })

    ipcMain.on('start',()=>{
        win.loadURL(url.format({
            pathname: path.join(__dirname, 'views/problem.html'),
            protocol: 'file',
            slashes: true
        }));
    })
});

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){app.quit()}
})

