import { Component } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';
import { AnneeAcademique } from '../model/annee-academique.model';
import { AnneeAcademiqueService } from '../service/annee-academique.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent {
  newFormation = new Formation();
  annees!: AnneeAcademique[];
  newIdAnnee!: number;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private formationService: FormationService,
    private anneesService: AnneeAcademiqueService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.anneesService.listeAnneeAcademique().subscribe((fo) => {
      this.annees = fo;
    });
  }

  addFormation() {
    this.newFormation.anneeAcademique = this.annees.find(
      (a) => a.id == this.newIdAnnee
    )!;

    this.formationService.ajouterFormation(this.newFormation).subscribe(
      (f) => {
        this.showMessage(
          'Formation ' + this.newFormation.libelleFor + ' crée avec succès!',
          false
        );
        this.newFormation = new Formation();
        this.newIdAnnee = null;
        this.router.navigate(['/formation/add_formation']);
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
