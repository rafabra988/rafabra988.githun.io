import { Component } from '@angular/core';
import { About } from '../about';
import { AboutService } from '../about.service';
import { ListaLivroComponent } from '../lista-livro/lista-livro.component';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  abouts: Array<About> = [];

  constructor(private  aboutServ:AboutService, private sharedServ:SharedService) { }

  message: number = 0;

  ngOnInit(): void {
    this.abouts = this.aboutServ.getValores();
    this.sharedServ.currentMessage.subscribe(
      (message) => (this.message = message)
    )
  }

  getValue(codigo:number, pg:string, pr:string, obs:string){
    for(let i=0; i<this.abouts.length; i++){
        if(this.abouts[i].codigo==codigo){
          this.abouts[this.message].codigo=codigo;
          this.abouts[this.message].pgparou=Number(pg);;
          this.abouts[this.message].prparou=Number(pr);;
          this.abouts[this.message].obs=obs;
        }
    }
  }
}
