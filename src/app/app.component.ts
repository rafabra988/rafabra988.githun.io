import { Component } from '@angular/core';
import { Livro } from './livro';
import { LivroService } from './livro.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'av2poo';

  livros: Array<Livro> = [];

  constructor(private livroServ: LivroService) { }

  ngOnInit(): void {
    this.livros = this.livroServ.getValores();
  }
}
