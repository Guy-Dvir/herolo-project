import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class GetJsonService {
  private _bookCollection;
  constructor(private _http: Http) {}

  load() {
    return this._http.get('data/books-info.json').map(response => {
      return response.json();
    });
  }

}
