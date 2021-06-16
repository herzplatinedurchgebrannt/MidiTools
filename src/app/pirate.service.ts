import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PirateService {

  constructor(private http: HttpClient) { }

  getPirates(): Promise<string[]> {
    alert("http!");
    return this.http.get<string[]>('assets/pirates.json').toPromise();
  }

  readTab(): Promise<string> {
    //alert("local");
    //return this.electronService.ipcRenderer.invoke('readTab');
    return this.http.get<string>('assets/pirates.json').toPromise();
  }

  selectPirate(name: string) {
    alert("http!");
    alert('You selected: ' + name);
  }
  angToElec(name: string) {
    //alert("local");
  }

  midiRead(name: string) {
    //alert("local");
  }

  tabWrite(name: string, tuning: string, sortPattern: boolean) {
    //alert("local");
  }

  /* Ab hier nur Schrott */

  electronMessage(): Promise<string[]>  {
    alert("http!");
    alert("na nüüü");
    return this.http.get<string[]>('assets/pirates.json').toPromise();
  }

  electronMessage2(message: string) {
    alert("http!");
    alert("na nüüü");
    return "fuuuck";
  }

  getIrgendwas(name: string){

  }

  public add(...params: number[]): number {
    let result = 0;
    for (let val of params) {
        result += val;
    }
    return result;
  }
  

}
