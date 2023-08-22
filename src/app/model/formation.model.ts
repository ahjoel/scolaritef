import { AnneeAcademique } from "./annee-academique.model";

export class Formation{
    id! : number;
    codeFor! : string;
    libelleFor! : string;
    scolarite! : number;
    anneeAcademique! : AnneeAcademique|any;
}