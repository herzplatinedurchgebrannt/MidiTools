import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { PirateService } from '../pirate.service';
import { PirateLocalService } from '../pirate-local.service';

@Component({
  selector: 'app-other',
  template: `
  <div class="container p-3 my-3 bg-dark text-white">
    <h1>LX MIDI TOOLS</h1>
    <p>Bass TAB Creator. Midi Drum Converter.</p>
  </div>

  <hr>
  <div class="row">
    <div class="col-sm-3"> 
      <button type="button" class="btn btn-outline-secondary" (click)="angToElec()">MIDI Write</button>
    </div>
  </div>
  
  <hr>


  <mat-button-toggle-group>
    <mat-button-toggle *ngFor="let tool of buttonList">
      <button (click)="tool.click()">Note<i [class]="tool.class"></i></button>
    </mat-button-toggle>
  </mat-button-toggle-group>
  `,
  styles: [
  ]
})
export class OtherComponent implements OnInit {

  buttonList =
  [
    { id: 0, class: 'fas fa-sign-out-alt', click: () => this.addPizza()},
    { id: 1, class: 'fas fa-arrow-left', click: () => this.removePizza() },
    { id: 2, class: 'far fa-sticky-note',click: () => this.updateGrid() }
  ];
  
    obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

  constructor(private pirateService: PirateService) { }

  ngOnInit(): void {
  }

  addPizza(){
    alert("jooo");
  }

  removePizza(){
    alert("jooo");

  }

  updateGrid(){
    alert("jooo");

  }

}
