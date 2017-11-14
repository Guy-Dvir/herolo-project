import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class BookComponent implements OnInit {
  @Input() book:object; 
  constructor() { }

  ngOnInit() {
  }
  

}
