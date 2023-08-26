import { Component } from '@angular/core';
import { Payement } from '../model/payement.model';
import { Etudiant } from '../model/etudiant.model';
import { PayementService } from '../service/payement.service';
import { EtudiantService } from '../service/etudiant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-payement',
  templateUrl: './add-payement.component.html',
  styleUrls: ['./add-payement.component.css']
})
export class AddPayementComponent {
  newPayement = new Payement();
  etudiants!: Etudiant[];
  newIdEtudiant!: number;
  scolar!: number;
  mtDejaRegle!: number|any;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private payementService: PayementService,
    private etudiantService: EtudiantService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.etudiantService.listeEtudiant().subscribe((p) => {
      this.etudiants = p;
    });
  }

  addPayement() {
    this.newPayement.etudiant = this.etudiants.find(
      (e) => e.id == this.newIdEtudiant
    )!;

    this.newPayement.solde = this.scolar - this.newPayement.montantReg

    this.payementService.ajouterPayement(this.newPayement).subscribe(
      (e) => {
        this.showMessage(
          'Payement ' + this.newPayement.codePay + ' crée avec succès!',
          false
        );
        this.newPayement = new Payement();
        this.newIdEtudiant = null;
        this.scolar = null;
        this.mtDejaRegle = null;
        this.router.navigate(['/payement/add_payement']);
      },
      (error) => {
        const errorMessage = error.error.message || 'Unknown error occurred.';
        this.showMessage(errorMessage, true);
        //console.log('error' + error);
      }
    );
  }

  onChangeEtudiant(){
    this.etudiantService.consulterEtudiant(this.newIdEtudiant).subscribe((et)=>{
      this.scolar = et.formation.scolarite;
    })

    this.payementService.montantDejaRegle(this.newIdEtudiant).subscribe((total:number)=>{
      this.mtDejaRegle = [total];
    })
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
