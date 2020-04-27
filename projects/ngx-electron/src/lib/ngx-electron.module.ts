import { NgModule } from '@angular/core';
import { ElectronService } from './ngx-electron.service';
import { IpcRendererService } from './ipc-renderer.service';


@NgModule({
  providers: [
    ElectronService,
    IpcRendererService,
  ]
})
export class NgxElectronModule { }
