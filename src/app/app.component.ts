import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{
    type:'server',
    name:'testserver',
    content:'Just a test server'}];

    onAddServer(serverData: {serverName:string,serverContent:string}) {
      this.serverElements.push({
        type: 'server',
        name: serverData.serverName,
        content: serverData.serverContent
      });
    }

    onAddBlueprint(blueprintData: {serverName:string,serverContent:string}) {
      this.serverElements.push({
        type: 'blueprint',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
    }

}
