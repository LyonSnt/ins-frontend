import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)], //esto se asocia a las rutas hijas
  exports: [RouterModule]
})
export class NivelRoutingModule { }
