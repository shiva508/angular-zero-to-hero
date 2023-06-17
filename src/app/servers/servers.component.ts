import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allAddNew:boolean =true;
  serverCreationStatus='No Server added';
  serverName="sample name";
  constructor(){
    setTimeout(()=>{
    this.allAddNew=false;
    },2000)
  }
  ngOnInit(): void {
    
  }

  onUpdateServerName(event:Event){
    this.serverName= (<HTMLInputElement> event.target).value;
  }

  onAddNewServer(){
    this.serverCreationStatus="New server created with name: "+this.serverName;
  }

}
