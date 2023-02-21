import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { ModalCompComponent } from './modal-comp/modal-comp.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { SomeComponent } from './some/some.component';  

@NgModule({
  declarations: [
    AppComponent,
    SomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
