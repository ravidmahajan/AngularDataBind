import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
  this.serverAdd.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  })
  }

  onAddBlueprint() {
    this.blueprintAdd.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    })
  }
}
