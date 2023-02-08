import { Injectable } from '@angular/core';
import { About } from './about';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private valores: Array<About> = []

  constructor() { }


  getValores = () =>{
    return this.valores;
  }

  setValores = (codigo: number, pgparou: number, prparou: number,obs:string) =>{
    this.valores.push(new About(codigo,pgparou, prparou,obs));
  }

  
}
