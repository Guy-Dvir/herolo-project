import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookComponent implements OnInit {

  @Input() book: object;
  @Input() bookId:number;
  
  @Output() removeBook:EventEmitter<number> = new EventEmitter<number>();
  @Output() editBook:EventEmitter<number> = new EventEmitter<number>();
  
  constructor() {
  }

  notifyRemove():void{
    this.removeBook.emit(this.bookId);
  }

  notifyEdit(){
    this.editBook.emit(this.bookId);
  }
  
  ngOnInit() {
  }
}
