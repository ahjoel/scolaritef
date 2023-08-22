import { Component } from '@angular/core';
import { Formation } from '../model/formation.model';
import { FormationService } from '../service/formation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-formation',
  templateUrl: './list-formation.component.html',
  styleUrls: ['./list-formation.component.css']
})
export class ListFormationComponent {
  formations: Formation[];
  message: string | null = null; 
  isError: boolean = false;

  constructor(private formationService: FormationService, private router : Router,) {}

  ngOnInit(): void {
    this.chargerFormations();
  }


  //Initialisation des données avec Datatable
  ngAfterViewInit() {
    this.formationService.listeFormation().subscribe((f) => {
      //console.log(cats);
      this.formations = f;
      $('#dataTable').DataTable();
    });
  }

  chargerFormations() {
    this.formationService.listeFormation().subscribe(
      (f) => {
        this.formations = f;
      },
      (error) => {
        const errorMessage = error.error.message || 'Failed to load Formation. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  supprimerFormation(f: Formation) {
    let conf = confirm('Etes-vous sûr de vouloire supprimer '+f.libelleFor+ ' ? \nCette action est irréversible.');
    if (conf)
      this.formationService.supprimerFormation(f.id).subscribe(() => {
        //console.log('produit supprimé');
        this.chargerFormations();
        this.router.navigate(['/formation']);
      });
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
