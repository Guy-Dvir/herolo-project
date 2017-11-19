import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, ViewEncapsulation, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookEditComponent {
  eForm: FormGroup;

  @Input() bookTitle: string;
  @Input() bookAuthor: string;
  @Input() bookDate: string;

  @Output() saveEdit: EventEmitter<object> = new EventEmitter<object>();

  constructor(private fb: FormBuilder) {
    this.eForm = fb.group({
      'date': ["", [Validators.required, 
        Validators.pattern(
          '^(?:(?:10|12|0?[13578])/(?:3[01]|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|(?:11|0?[469])/(?:30|[12][0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/(?:2[0-8]|1[0-9]|0?[1-9])/(?:1[8-9]\\d{2}|[2-9]\\d{3})|0?2/29/[2468][048]00|0?2/29/[3579][26]00|0?2/29/[1][89][0][48]|0?2/29/[2-9][0-9][0][48]|0?2/29/1[89][2468][048]|0?2/29/[2-9][0-9][2468][048]|0?2/29/1[89][13579][26]|0?2/29/[2-9][0-9][13579][26])$')]],
      'title': ["", Validators.required],
      'author': ["", Validators.required]
    });
  }

  OnInit() {

  }

  notifyEditSave(eDetails,event): void {
    document.getElementById('close').click();
    this.saveEdit.emit(eDetails);
  }

}
