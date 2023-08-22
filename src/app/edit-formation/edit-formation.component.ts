import { Component } from '@angular/core';
import { Formation } from '../model/formation.model';
import { AnneeAcademique } from '../model/annee-academique.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../service/formation.service';
import { AnneeAcademiqueService } from '../service/annee-academique.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent {
  currentFormation = new Formation();
  annees!: AnneeAcademique[];
  updatedAnId!: number;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formationService: FormationService,
    private anneeService: AnneeAcademiqueService
  ) {}

  ngOnInit(): void {
    this.anneeService.listeAnneeAcademique().subscribe((an) => {
      this.annees = an;
      //console.log(cats);
    });
    // this.currentFourniture.dateModification = new Date();
    this.formationService
      .consulterFormation(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (form) => {
          this.currentFormation = form;
          this.updatedAnId = this.currentFormation.anneeAcademique.id;
        },
        (error) => {
          const errorMessage =
            error.error.message ||
            'Failed to Load Formation. Please try again later.';
          this.showMessage(errorMessage, true);
        }
      );
  }

  updateFormation() {
    this.currentFormation.anneeAcademique = this.annees.find(
      (a) => a.id == this.updatedAnId
    )!;
    this.formationService.modifierFormation(this.currentFormation).subscribe(
      (four) => {
        this.showMessage('Modification effectuée!', false);
        this.router.navigate(['/formation/edit_formation']);
      },
      (error) => {
        const errorMessage =
          error.error.message ||
          'Failed to Edit Formation. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
