import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Formation } from '../model/formation.model';
import { EtudiantService } from '../service/etudiant.service';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent {
  newEtudiant = new Etudiant();
  formations!: Formation[];
  newIdFormation!: number;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private etudiantService: EtudiantService,
    private formationService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formationService.listeFormation().subscribe((fo) => {
      this.formations = fo;
    });
  }

  addEtudiant() {
    this.newEtudiant.formation = this.formations.find(
      (f) => f.id == this.newIdFormation
    )!;

    this.etudiantService.ajouterEtudiant(this.newEtudiant).subscribe(
      (e) => {
        this.showMessage(
          'Etudiant ' + this.newEtudiant.nomEt + ' crée avec succès!',
          false
        );
        this.newEtudiant = new Etudiant();
        this.newIdFormation = null;
        this.router.navigate(['/etudiant/add_etudiant']);
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
