import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Formation } from '../model/formation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../service/etudiant.service';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-edit-etudiant',
  templateUrl: './edit-etudiant.component.html',
  styleUrls: ['./edit-etudiant.component.css']
})
export class EditEtudiantComponent {
  currentEtudiant = new Etudiant();
  formations!: Formation[];
  updatedForId!: number;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService,
    private formationService: FormationService
  ) {}

  ngOnInit(): void {
    this.formationService.listeFormation().subscribe((f) => {
      this.formations = f;
    });
    this.etudiantService
      .consulterEtudiant(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (e) => {
          this.currentEtudiant = e;
          this.updatedForId = this.currentEtudiant.formation.id;
        },
        (error) => {
          const errorMessage =
            error.error.message ||
            'Failed to Load Etudiant. Please try again later.';
          this.showMessage(errorMessage, true);
        }
      );
  }

  updateEtudiant() {
    this.currentEtudiant.formation = this.formations.find(
      (f) => f.id == this.updatedForId
    )!;
    this.etudiantService.modifierEtudiant(this.currentEtudiant).subscribe(
      (fo) => {
        this.showMessage('Modification effectuée!', false);
        this.router.navigate(['/etudiant/edit_etudiant']);
      },
      (error) => {
        const errorMessage =
          error.error.message ||
          'Failed to Edit Etudiant. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
