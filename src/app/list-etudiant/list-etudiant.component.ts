import { Component } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../service/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.css']
})
export class ListEtudiantComponent {
  etudiants: Etudiant[];
  message: string | null = null; 
  isError: boolean = false;

  constructor(private etudiantService: EtudiantService, private router : Router,) {}

  ngOnInit(): void {
    this.chargerEtudiants();
  }


  //Initialisation des données avec Datatable
  ngAfterViewInit() {
    this.etudiantService.listeEtudiant().subscribe((e) => {
      //console.log(cats);
      this.etudiants = e;
      $('#dataTable').DataTable();
    });
  }

  chargerEtudiants() {
    this.etudiantService.listeEtudiant().subscribe(
      (e) => {
        this.etudiants = e;
      },
      (error) => {
        const errorMessage = error.error.message || 'Failed to load Etudiant. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  supprimerEtudiant(e: Etudiant) {
    let conf = confirm('Etes-vous sûr de vouloire supprimer '+e.nomEt+ ' '+e.prenomEt+' ? \nCette action est irréversible.');
    if (conf)
      this.etudiantService.supprimerEtudiant(e.id).subscribe(() => {
        //console.log('produit supprimé');
        this.chargerEtudiants();
        this.router.navigate(['/etudiant']);
      });
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
