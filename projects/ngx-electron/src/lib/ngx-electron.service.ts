import { Injectable } from '@angular/core';

import { AllElectron } from 'electron';

@Injectable()
export class ElectronService {

  instance: AllElectron | undefined;

  isDefined() {
    return this.instance ? true : false;
  }

  constructor() {
    if (window.require) {
      try {
        this.instance = window.require('electron');
      } catch (e) {
        throw e;
      }
    } else {
      console.warn('Electron was not loaded');
    }
  }
}
