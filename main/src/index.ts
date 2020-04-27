import electron from 'electron'

import 'reflect-metadata';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

import path from 'path';
import isDev from 'electron-is-dev';

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ width: 900, height: 680 });
    mainWindow.loadURL(
        isDev
            ? 'http://localhost:8080'
            : `file://${path.join(__dirname, '../dist/index.html')}`
    );
    // if (isDev) {
    //   // Open the DevTools.
    //   //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    //   mainWindow.webContents.openDevTools();
    // }
    mainWindow.on('closed', () => (mainWindow = null));
    //connect to database
    // createConnection({
    //     type: 'sqlite',
    //     username: 'root',
    //     password: 'admin',
    //     database: 'test',
    //     entities: [__dirname + '/*entity.js'],
    //     synchronize: true,
    // })
    //     .then((connection) => {
    //         // here you can start to work with your entities
    //     })
    //     .catch((error) => console.log(error));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
