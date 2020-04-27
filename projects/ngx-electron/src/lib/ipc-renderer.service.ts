import { Injectable } from '@angular/core';

import { IpcRenderer } from 'electron';
import { Observable, fromEvent } from 'rxjs';

@Injectable()
export class IpcRendererService {

  instance: IpcRenderer | undefined;

  isDefined() {
    return this.instance ? true : false;
  }

  constructor() {
    if (window.require) {
      try {
        this.instance = window.require('electron').ipcRenderer;
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron\'s IPC was not loaded');
    }
  }

  send(event: string, ...params: any[]) {
    if (this.instance) {
      console.warn('Electron\'s IPC was not loaded');
      return;
    }

    this.instance.send(event, ...params);
  }

  on<Type = any>(event: string) {
    if (!this.instance) {
      console.warn('Electron\'s IPC was not loaded');
      return new Observable<Type>();
    }

    return fromEvent<Type>(this.instance, event);
  }
}
