import { Component, TemplateRef } from '@angular/core';

import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { SomeComponent } from './some/some.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
 
  openModalWithComponent() {
    const initialState: ModalOptions = {
      initialState: {
        list: [
          'Open a modal with component',
          'Pass your data',
          'Do something else',
          '...'
        ],
        title: 'Modal with component'
      }
    };
    this.bsModalRef = this.modalService.show(SomeComponent, initialState);
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
