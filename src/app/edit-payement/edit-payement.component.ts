import { Component } from '@angular/core';
import { Payement } from '../model/payement.model';
import { Etudiant } from '../model/etudiant.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../service/etudiant.service';
import { PayementService } from '../service/payement.service';

@Component({
  selector: 'app-edit-payement',
  templateUrl: './edit-payement.component.html',
  styleUrls: ['./edit-payement.component.css']
})
export class EditPayementComponent {
  currentPayement = new Payement();
  etudiants!: Etudiant[];
  updatedEtudId!: number;
  scolar!: number;
  mtDejaRegle!: number;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private etudiantService: EtudiantService,
    private payementService: PayementService
  ) {}

  ngOnInit(): void {
    this.etudiantService.listeEtudiant().subscribe((e) => {
      this.etudiants = e;
    });
    this.payementService
      .consulterPayement(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (p) => {
          this.currentPayement = p;
          this.updatedEtudId = this.currentPayement.etudiant.id;
        },
        (error) => {
          const errorMessage =
            error.error.message ||
            'Failed to Load Payement. Please try again later.';
          this.showMessage(errorMessage, true);
        }
      );
  }

  onChangeEtudiant(){
    this.etudiantService.consulterEtudiant(this.updatedEtudId).subscribe((et)=>{
      this.scolar = et.formation.scolarite;
    })

    this.payementService.montantDejaRegle(this.updatedEtudId).subscribe((total:number)=>{
      this.mtDejaRegle = total;
    })
  }

  updateEtudiant() {
    this.currentPayement.etudiant = this.etudiants.find(
      (e) => e.id == this.updatedEtudId
    )!;
    this.payementService.modifierPayement(this.currentPayement).subscribe(
      (p) => {
        this.showMessage('Modification effectuée!', false);
        this.router.navigate(['/payement/edit_payement']);
      },
      (error) => {
        const errorMessage =
          error.error.message ||
          'Failed to Edit Payement. Please try again later.';
        this.showMessage(errorMessage, true);
      }
    );
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
