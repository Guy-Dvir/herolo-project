import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetJsonService } from './../../services/get-json.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class BookListComponent implements OnInit {
  bForm: FormGroup;
  bMeta: any = {
    bDate: null,
    bAuthor: null,
    bTitle: null
  }

  books: any



  constructor(private fb: FormBuilder, private _getJson: GetJsonService) {

    // getJson.load().then((data) => {
    //   console.log("what is in the data " + data);
    //   this.books = JSON.stringify(data);
    // });

    this.bForm = fb.group({
      'date': ["", Validators.required],
      'title': ["", Validators.required],
      'author': ["", Validators.required]
    })
  }

  ngOnInit() {
    this._getJson.load().subscribe(res => {this.books = res;})
  }
  private addBook(bDetails) {
    let books = this.books;

    if (bDetails) {
      this.bMeta.bDate = bDetails.date;
      this.bMeta.bAuthor = bDetails.author;
      this.bMeta.bTitle = bDetails.title;

      books.unshift({
        "author": this.bMeta.bAuthor,
        "date": this.bMeta.bDate,
        "title": this.bMeta.bTitle
      });
    }

    for (let key in this.bMeta) {
      this.bMeta[key] = null;
    }
  }


}
