import { Component } from '@angular/core';
import { AnneeAcademique } from '../model/annee-academique.model';
import { AnneeAcademiqueService } from '../service/annee-academique.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-annees-academique',
  templateUrl: './list-annees-academique.component.html',
  styleUrls: ['./list-annees-academique.component.css']
})
export class ListAnneesAcademiqueComponent {
  annees: AnneeAcademique[];
  message: string | null = null; 
  isError: boolean = false;

  constructor(private anneeAcademiqueService: AnneeAcademiqueService, private router : Router,) {}

  ngOnInit(): void {
    this.chargerAnnees();
  }


  //Initialisation des données avec Datatable
  ngAfterViewInit() {
    this.anneeAcademiqueService.listeAnneeAcademique().subscribe((ans) => {
      //console.log(cats);
      this.annees = ans;
      $('#dataTable').DataTable();
    });
  }

  chargerAnnees() {
    this.anneeAcademiqueService.listeAnneeAcademique().subscribe(
      (ans) => {
        this.annees = ans;
      },
      (error) => {
        const errorMessage = error.error.message || 'Failed to load Annees Academique. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  supprimerAnnee(a: AnneeAcademique) {
    let conf = confirm('Etes-vous sûr de vouloire supprimer '+a.libelleAn+ ' ? \nCette action est irréversible.');
    if (conf)
      this.anneeAcademiqueService.supprimerAnneeAcademique(a.id).subscribe(() => {
        //console.log('produit supprimé');
        this.chargerAnnees();
        this.router.navigate(['/annee']);
      });
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
