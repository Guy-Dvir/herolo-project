import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookListComponent implements OnInit {
  bForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bForm = fb.group({
      'bDate': ["", Validators.required],
      'bTitle': ["", Validators.required],
      'bAuthor': ["", Validators.required]
    })
  }

  private addBook(bDetails) {
    let books = this.books;
    //let books = JSON.parse(this.books);    

    if (bDetails)
      books.push({
        "author": <string>bDetails.bAuthor,
        "date": <string>bDetails.bDate,
        "title": <string>bDetails.bTitle
      });
      
    for (let key in bDetails) {
      bDetails[key] = "";
    }
  }

  ngOnInit() {
  }





  books = [
    {
      author: "auth",
      date: "12.2.99",
      title: "my bo@@@@ok1",
    },
    {
      author: "looloo",
      date: "12.2.94",
      title: "my bo*%&@@@ok2",
    },
    {
      author: "didi",
      date: "12.2.93",
      title: "my book3",
    },
    {
      author: "didilolo",
      date: "12.2.93",
      title: "my book4",
    }
  ]

}
