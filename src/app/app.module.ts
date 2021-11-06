import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // and type script knows about server component
import { FormsModule } from '@angular/forms'; // for two way BINDING

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // now angulr knows about server component
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
