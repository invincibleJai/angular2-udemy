import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers:boolean = false;
  serverCreationStatus: string = "No server were created!";
  serverName:string = "";
  serverCreated: boolean = false;
  servers: any = ['test server 1', 'test server 2']

  constructor() { 
    setTimeout(() => {this.allowNewServers=true},3000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! the name of server is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
