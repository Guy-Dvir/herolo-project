import { HttpModule, JsonpModule } from '@angular/http';
import { GetJsonService } from './services/get-json.service';
import { RemoveSpecialChars } from './pipes/remove-special-chars.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookComponent } from './components/book/book.component';
import { BookEditComponent } from './components/book-edit/book-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    RemoveSpecialChars,    
    AppComponent,
    BookListComponent,
    BookComponent,
    BookEditComponent
  ],
  providers: [    
    FormBuilder,
    GetJsonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
