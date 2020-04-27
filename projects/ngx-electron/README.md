# ngx-electron

Angular [electron](https://www.electronjs.org/) wrapper service 

[Demo](https://d3v0ps.github.io/ngx-electron)

## Getting Started

### 1. Install packages
```sh
npm i electron ngx-electron
```

### 2. Import Module
```typescript
import { NgxElectronModule } from 'ngx-electron';

@NgModule({
  declarations: [AppComponent],
  imports: [
    NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

### 3. Include the services

```ts

import { ElectronService, IpcRendererService } from 'ngx-electron';

export class AppComponent {

  constructor(
    private electron: ElectronService,
    private ipc: IpcRendererService
  ){}

  ngOnInit() {

    // Checks
    this.electron.isDefined();
    this.ipc.isDefined();

    // Static accessors
    this.electron.instance;
    this.ipc.instance;

    // IpcRenderer Shortcuts
    this.ipc.send('event');
    this.ipc.on('event').subscribe(eventData => ...);
  }

}

```

### 4. Run your electron app

```sh
ng build --prod && electron .
```
