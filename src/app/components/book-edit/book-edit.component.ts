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
  private _eMeta: object;

  @Input('bookToEdit')
  set eMeta(value: object) {
    this._eMeta = value;
  }
  get eMeta(): object {
    return this._eMeta;
  }

  @Output() saveEdit: EventEmitter<object> = new EventEmitter<object>();

  constructor(private fb: FormBuilder) {
    this.eForm = fb.group({
      'dateEdit': ["", Validators.required],
      'titleEdit': ["", Validators.required],
      'authorEdit': ["", Validators.required]
    });
  }

  notifyEditSave(eDetails): void {
    console.log(eDetails)
    //this.saveEdit.emit(this.eMeta);
  }

}
