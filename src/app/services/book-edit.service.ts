import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
 
@Injectable()
export class BookEditService {
 
private _bookMeta:object;

getMeta = () => { return this._bookMeta };

  // // Observable string sources
  // bookMeta = new Subject<object>();
 
  // // Observable string streams
  // bookMeta$ = this.bookMeta.asObservable();
 
  // // Service message commands
  // announceChange(mission: object) {
  //   this.bookMeta.next(mission);
  // }
  
}