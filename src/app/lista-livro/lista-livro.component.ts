import { Component, OnInit } from '@angular/core';
import { Livro } from '../livro';
import { LivroService } from '../livro.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-lista-livro',
  templateUrl: './lista-livro.component.html',
  styleUrls: ['./lista-livro.component.css']
})
export class ListaLivroComponent implements OnInit{

  livros: Array<Livro> = [];

  constructor(private livroServ: LivroService, private sharedServ:SharedService) { }

  message: number = 0;


  public ngOnInit(): void {
    this.livros = this.livroServ.getValores();
    this.sharedServ.currentMessage.subscribe(
      (message) => (this.message = message)
    )
  }

  remove(codigo:number): void {
    let j = 0;
    for (let i = 0; i < this.livros.length; i++) {
      const item = this.livros[i];
      if (item.codigo !== codigo) {
          this.livros[j] = item;
          j++;
      }
    }
    this.livros.length = j;
  }

  pin(codigo:number, pinCheck:number): void {
    for(let i=0; i<this.livros.length; i++){
      if(codigo==this.livros[i].codigo){
        this.livros[i].pin=pinCheck;
        console.log(this.livros[i].pin);
      }
    }
  }

  public getCode(code: number):void{
    this.sharedServ.changeMessage(code);
  }

}
