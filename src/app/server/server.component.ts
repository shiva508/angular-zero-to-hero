import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent{
  serviceName:string ="Dear Comrade Tutorials";
  serverPort:string ="8080";
  health:string ="Up";
  environment:string="Development";
  
  getEnvironment(){
    return this.environment;
  }
}
