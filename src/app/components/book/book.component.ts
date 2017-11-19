import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookComponent{

  @Input() book: object;
  @Input() bookId: number;

  @Output() removeBook: EventEmitter<number> = new EventEmitter<number>();
  @Output() editBook: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  notify(type) {
    switch (type) {
      case 'remove':
      this.removeBook.emit(this.bookId);      
        break;

      case 'edit':
      this.editBook.emit(this.bookId);      
        break;
    }
  }
}
