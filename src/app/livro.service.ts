import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private valores: Array<Livro> = []

  constructor() { }


  getValores = () =>{
    return this.valores;
  }

  setValores = (codigo:number, nome:string, pin:number) =>{
    this.valores.push(new Livro(codigo,nome,pin));
  }
}
