import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  books = [
    { 
      img: "http://www.fillmurray.com/200/100",
      author: "auth",
      date: "12.2.99",
      title: "my book1",
      fav: 0
    },
    { 
      img: "http://www.fillmurray.com/200/100",
      author: "looloo",
      date: "12.2.94",
      title: "my book2",
      fav: 0
    },
    { 
      img: "http://www.fillmurray.com/200/100",
      author: "didi",
      date: "12.2.93",
      title: "my book3",
      fav: 0
    },
    { 
      img: "http://www.fillmurray.com/200/100",
      author: "didilolo",
      date: "12.2.93",
      title: "my book4",
      fav: 0
    } 
  ]

}
