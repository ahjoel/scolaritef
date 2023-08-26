import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ListAnneesAcademiqueComponent } from './list-annees-academique/list-annees-academique.component';
import { AddAnneeAcademiqueComponent } from './add-annee-academique/add-annee-academique.component';
import { FormsModule } from '@angular/forms';
import { EditAnneeAcademiqueComponent } from './edit-annee-academique/edit-annee-academique.component';
import { ListFormationComponent } from './list-formation/list-formation.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { EditFormationComponent } from './edit-formation/edit-formation.component';
import { NotificationMailComponent } from './notification-mail/notification-mail.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    ListAnneesAcademiqueComponent,
    AddAnneeAcademiqueComponent,
    EditAnneeAcademiqueComponent,
    ListFormationComponent,
    AddFormationComponent,
    EditFormationComponent,
    NotificationMailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
