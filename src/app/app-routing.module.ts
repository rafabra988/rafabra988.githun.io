import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddComponent } from './add/add.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"add",
    component: AddComponent
  },
  {
    path:"home",
    component: AppComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
