import { Component, ElementRef, VERSION, ViewChild } from '@angular/core';
import { AboutService } from '../about.service';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  codigo:number = 0;

  constructor(private livroServ: LivroService, private aboutServ:AboutService) { }

  getValue(nome:string){
    if(nome!=""){
      this.livroServ.setValores(this.codigo,nome,0)
      this.aboutServ.setValores(this.codigo, 0,0,"[VAZIO]")
      console.log(this.codigo);
      this.codigo++;
    }
  }


}
