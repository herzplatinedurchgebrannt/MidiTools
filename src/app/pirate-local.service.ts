import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class PirateLocalService {

  constructor(private electronService: ElectronService) { }

  getPirates(): Promise<string[]> {
    //alert("local");
    return this.electronService.ipcRenderer.invoke('getPirates');
  }

  readTab(): Promise<string> {
    return this.electronService.ipcRenderer.invoke('readTab');
  }

  selectPirate(name: string) {
    //alert("local");
    this.electronService.ipcRenderer.sendSync('selectPirate', name);
  }

  angToElec(name: string) {
    //alert("local");
    this.electronService.ipcRenderer.sendSync('angToElec', name);
  }

  midiRead(name: string) {
    //alert("local");
    this.electronService.ipcRenderer.sendSync('midiRead', name);
  }

  tabWrite(name: string, tuning: string, sortPattern: boolean) {
    //alert("local");
    this.electronService.ipcRenderer.sendSync('tabWrite', name, tuning, sortPattern);
  }



  /* Ab hier nur Schrott */

  electronMessage(): Promise<string[]>  {
     return this.electronService.ipcRenderer.invoke('electronMessage');
  }

  electronMessage2(message: string){
    return this.electronService.ipcRenderer.invoke('electronMessage2');
 }


  getIrgendwas(name: string){
    return this.electronService.ipcRenderer.invoke('getIrgendwas');
  }

  public add(...params: number[]): number {
    //alert("local!!!!");
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  }
/*
  fileWritten(): Promise<string> {
    return this.electronService.ipcRenderer.invoke('fileWritten');
  }*/
  
}
