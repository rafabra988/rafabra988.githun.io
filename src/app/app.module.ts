import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaLivroComponent } from './lista-livro/lista-livro.component';
import { LivroService } from './livro.service';
import { AddComponent } from './add/add.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaLivroComponent,
    AddComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
