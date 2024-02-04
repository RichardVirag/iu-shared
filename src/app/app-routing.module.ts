import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SimulacaoComponent } from './components/simulacao/simulacao.component';
import { ResumoComponent } from './components/resumo/resumo.component';

const routes: Routes = [
    {
        path: 'contratacao-parcelada',
        component: SimulacaoComponent
    },
    {
        path: 'contratacao-parcelada/resumo',
        component: ResumoComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
