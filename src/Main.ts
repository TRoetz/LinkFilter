import {BrowserWindow} from 'electron';
export default class Main {
    constructor(private application: Electron.App){}
    mainWindow: Electron.BrowserWindow;
    onWindowAllClosed() {
        if (process.platform !== 'darwin')
            this.application.quit();
    }
    onClose(){
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        this.mainWindow = null;
    }
    onReady(){
        // this is a dependency we will have to live with
        // because we can't create BrowserWindow until
        // onReady fires.
        this.mainWindow = new BrowserWindow({width: 800, height: 600})
        this.mainWindow.loadURL('file://' + __dirname + '/index.html');
        this.mainWindow.on('closed', this.onClose);
    }
    main(){
        this.application.on('window-all-closed',this.onWindowAllClosed);
        this.application.on('ready', this.onReady);
    }
}


