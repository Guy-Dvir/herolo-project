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
  bookToEdit: object;
  editId: number;
  inputErr: boolean = false;


  errTypes: object = {
    dateErr: "Please enter date in the format of MM/DD/YYYY"
  }
  errMsg: string;


  constructor(private fb: FormBuilder, private _getJson: GetJsonService) {
    this.bForm = fb.group({
      'bDate': ["", [Validators.required,
      Validators.pattern(
        '^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$')]],
      'bTitle': ["", Validators.required],
      'bAuthor': ["", Validators.required]
    });
  }

  ngOnInit() {
    this._getJson.load().subscribe(res => { this.books = res; });
  }

  addBook(bDetails) {
    let books = this.books;
    this.inputErr = false;

    if (bDetails) {
      this.bMeta.bDate = bDetails.bDate;
      this.bMeta.bAuthor = bDetails.bAuthor;
      this.bMeta.bTitle = bDetails.bTitle;

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

  removeBook(id: number) {
    this.books.splice(id, 1)
  }

  editBook(id: number) {
    this.editId = id;
    this.bookToEdit = this.books[this.editId];
  }

  saveEdit(data: object) {
    this.books[this.editId] = data;
  }

  valiDate(event) {
    if (event && event.length > 0 && !(this.bForm.valid)) {
      this.inputErr = true;
      this.errMsg = this.errTypes["dateErr"];
    } else {
      this.inputErr = false;
    }
  }

}
