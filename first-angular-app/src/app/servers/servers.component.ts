import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: `<app-server></app-server>
  // <app-server></app-server>`,
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent implements OnInit {

allowNewServer=false;
serverName='TestServer';
ServerCreationStatus='Server was not created yet!';
serverCreated=false;
servers=['TestServer','TestServer 2'];

  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.ServerCreationStatus='Server is created! The name is'+this.serverName;
  }


  //this can be helpful on property binding not on two-way binding
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
