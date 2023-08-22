import { Component } from '@angular/core';
import { AnneeAcademique } from '../model/annee-academique.model';
import { AnneeAcademiqueService } from '../service/annee-academique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-annee-academique',
  templateUrl: './add-annee-academique.component.html',
  styleUrls: ['./add-annee-academique.component.css']
})
export class AddAnneeAcademiqueComponent {
  newAnnee = new AnneeAcademique();
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private anneeAcademiqueService: AnneeAcademiqueService,
    private router: Router
  ) {}

  addAnnee() {
    this.anneeAcademiqueService.ajouterAnneeAcademique(this.newAnnee).subscribe(
      (an) => {
        this.showMessage(
          'Année Académique ' + this.newAnnee.libelleAn + ' crée avec succès!',
          false
        );
        this.newAnnee = new AnneeAcademique();
        this.router.navigate(['/annee/add_annee']);
      },
      (error) => {
        const errorMessage = error.error.message || 'Unknown error occurred.';
        this.showMessage(errorMessage, true);
        //console.log('error' + error);
      }
    );
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }

}
