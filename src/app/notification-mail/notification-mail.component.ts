import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from '../service/notification.service';
import { PayementService } from '../service/payement.service';
import { Notification } from '../model/notification.model';

@Component({
  selector: 'app-notification-mail',
  templateUrl: './notification-mail.component.html',
  styleUrls: ['./notification-mail.component.css']
})
export class NotificationMailComponent {
  newNotification = new Notification();
  recipient!: number;
  message: string | null = null;
  isError: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notificationService: NotificationService,
    private payementService: PayementService
  ) {}

  ngOnInit(): void {

    this.payementService
      .consulterPayement(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (e) => {
          let id = this.activatedRoute.snapshot.params['id']
          this.newNotification.recipient = e.etudiant.mailParent;
          this.newNotification.subject = 'NOTIFICATION DE PAYEMENT';
          this.newNotification.msgBody = 
          `Cher Parent/Tuteur l'étudiant(e) ${e.etudiant.nomEt} ${e.etudiant.prenomEt} à procéder ce ${e.datePay} au règlement de la scolarité de ${e.montantReg} F CFA. Le solde de la scolarité est : ${e.solde}.`;
        },
        (error) => {
          const errorMessage =
            error.error.message ||
            'Failed to Load Payement Information. Please try again later.';
          this.showMessage(errorMessage, true);
        }
      );
  }

  addNotification() {

    this.notificationService.envoiMail(this.newNotification).subscribe(
      () => {
        this.showMessage(
          'Message envoyé au destinataire',
          false
        );
        this.router.navigate(['/notification']);
      },
      (error) => {
        const errorMessage = error.error.message || 'Message envoyé au destinataire';
        this.showMessage(errorMessage, false);
      }
    );
  }

  showMessage(message: string, isError: boolean = false) {
    this.message = message;
    this.isError = isError;
  }
}
