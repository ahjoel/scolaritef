import { Etudiant } from "./etudiant.model";

export class Payement{
    id! : number;
    codePay! : string;
    datePay! : Date|string;
    montantReg! : number;
    solde! : number;
    etudiant! : Etudiant|any;
}