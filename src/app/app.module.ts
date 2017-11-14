import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { BookComponent } from './books/book/book.component';
import { EditModalComponent } from './modals/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './modals/delete-modal/delete-modal.component';
import { CreateModalComponent } from './modals/create-modal/create-modal.component';
import { ModalBaseComponent } from './modals/modal-base/modal-base.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    EditModalComponent,
    DeleteModalComponent,
    CreateModalComponent,
    ModalBaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
