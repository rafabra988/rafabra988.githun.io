import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  messageSource = new BehaviorSubject(0);
  currentMessage = this.messageSource.asObservable();

  constructor() { }


public changeMessage(message :number):void{
  this.messageSource.next(message);
}

}
