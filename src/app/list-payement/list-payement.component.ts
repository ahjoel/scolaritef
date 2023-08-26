import { Component } from '@angular/core';
import { Payement } from '../model/payement.model';
import { PayementService } from '../service/payement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-payement',
  templateUrl: './list-payement.component.html',
  styleUrls: ['./list-payement.component.css']
})
export class ListPayementComponent {
  payements: Payement[];
  message: string | null = null; 
  isError: boolean = false;

  constructor(private payementService: PayementService, private router : Router,) {}

  ngOnInit(): void {
    this.chargerPayement();
  }

  //Initialisation des données avec Datatable
  ngAfterViewInit() {
    this.payementService.listePayement().subscribe((e) => {
      //console.log(cats);
      this.payements = e;
      $('#dataTable').DataTable();
    });
  }

  chargerPayement() {
    this.payementService.listePayement().subscribe(
      (e) => {
        this.payements = e;
      },
      (error) => {
        const errorMessage = error.error.message || 'Failed to load Payement. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  supprimerPayement(p: Payement) {
    let conf = confirm('Etes-vous sûr de vouloire supprimer '+p.codePay+ ' '+p.etudiant?.nomEt+' ? \nCette action est irréversible.');
    if (conf)
      this.payementService.supprimerPayement(p.id).subscribe(() => {
        this.chargerPayement();
        this.router.navigate(['/payement']);
      });
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
