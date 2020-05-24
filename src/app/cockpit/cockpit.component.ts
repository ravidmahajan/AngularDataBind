import { Component, OnInit, Input, Output, EventEmitter,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  newServerName = '';
  newServerContent = '';
  // @Input() element:{type:string,name:string,content:string};
@Output() blueprintAdd = new EventEmitter<{serverName:string,serverContent:string}>();
@Output() serverAdd = new EventEmitter<{serverName:string,serverContent:string}>();

@ViewChild('serverContentInput') serverContentInput:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName1:HTMLInputElement) {
  this.serverAdd.emit({
    serverName: serverName1.value,
    serverContent: this.serverContentInput.nativeElement.value
  })
  }

  onAddBlueprint(serverName1:HTMLInputElement) {
    this.blueprintAdd.emit({
      serverName: serverName1.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }
}
