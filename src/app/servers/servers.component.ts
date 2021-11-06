import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus =  "Server was not Created";
serverName = "";

// Event Binding
onCreateServer() {
  this.serverCreationStatus = "Server was Created"
}

onUpdateServerName(event : Event){
  this.serverName =(<HTMLInputElement>event.target).value;
}

  constructor() { 
    setTimeout(() => {this.allowNewServer= true;
    },2000)
  }

  ngOnInit(): void {
  }

}
