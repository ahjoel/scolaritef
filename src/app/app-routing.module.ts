import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListAnneesAcademiqueComponent } from './list-annees-academique/list-annees-academique.component';
import { AddAnneeAcademiqueComponent } from './add-annee-academique/add-annee-academique.component';
import { EditAnneeAcademiqueComponent } from './edit-annee-academique/edit-annee-academique.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { ListEtudiantComponent } from './list-etudiant/list-etudiant.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { EditEtudiantComponent } from './edit-etudiant/edit-etudiant.component';
import { ListPayementComponent } from './list-payement/list-payement.component';
import { AddPayementComponent } from './add-payement/add-payement.component';
import { EditPayementComponent } from './edit-payement/edit-payement.component';

const routes: Routes = [
  {path: "*", component: DashboardComponent},
  {path: "annee", component: ListAnneesAcademiqueComponent},
  {path: "annee/add_annee", component: AddAnneeAcademiqueComponent},
  {path: "annee/edit_annee/:id", component: EditAnneeAcademiqueComponent},
  {path: "formation", component: ListFormationComponent},
  {path: "formation/add_formation", component: AddFormationComponent},
  {path: "formation/edit_formation/:id", component: EditFormationComponent},
  {path: "etudiant", component: ListEtudiantComponent},
  {path: "etudiant/add_etudiant", component: AddEtudiantComponent},
  {path: "etudiant/edit_etudiant/:id", component: EditEtudiantComponent},
  {path: "payement", component: ListPayementComponent},
  {path: "payement/add_payement", component: AddPayementComponent},
  {path: "payement/edit_payement/:id", component: EditPayementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
