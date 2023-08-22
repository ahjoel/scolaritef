import { Component } from '@angular/core';
import { AnneeAcademique } from '../model/annee-academique.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AnneeAcademiqueService } from '../service/annee-academique.service';

@Component({
  selector: 'app-edit-annee-academique',
  templateUrl: './edit-annee-academique.component.html',
  styleUrls: ['./edit-annee-academique.component.css']
})
export class EditAnneeAcademiqueComponent {
  currentAnnee = new AnneeAcademique();
  // categories!: Categorie[];
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private anneeAcademiqueService: AnneeAcademiqueService
  ) {}

  ngOnInit() {
    this.anneeAcademiqueService
      .consulterAnneeAcademique(this.activatedRoute.snapshot.params['id'])
      .subscribe((an) => {
        this.currentAnnee = an;
      });
  }

  updateAnnee() {
    this.anneeAcademiqueService.modifierAnneeAcademique(this.currentAnnee).subscribe(
      (cat) => {
        this.showMessage('Modification effectuée!', false);
        this.router.navigate(['/annee/edit_annee']);
      },
      (error) => {
        const errorMessage =
          error.error.message ||
          'Failed to Edit Annee. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
