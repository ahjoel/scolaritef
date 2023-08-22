import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListAnneesAcademiqueComponent } from './list-annees-academique/list-annees-academique.component';

const routes: Routes = [
  {path: "*", component: DashboardComponent},
  {path: "annee", component: ListAnneesAcademiqueComponent},
  {path: "annee/add_annee", component: ListAnneesAcademiqueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
