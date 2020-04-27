# ngx-electronjs

Angular [electronjs](https://www.electronjs.org/) wrapper service 

[Demo](https://d3v0ps.github.io/ngx-electron)

## Getting Started

### 1. Install packages
```sh
npm i electron ngx-electronjs
```

### 2. Import Module
```typescript
import { NgxElectronModule } from 'ngx-electronjs';

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

import { ElectronService, IpcRendererService } from 'ngx-electronjs';

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
