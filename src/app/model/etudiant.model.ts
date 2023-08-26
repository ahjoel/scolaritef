import { Formation } from "./formation.model";

export class Etudiant{
    id! : number;
    codeEt! : string;
    nomEt! : string;
    prenomEt! : string;
    sexeEt! : string;
    datenaissEt! : Date|string;
    mailEt! : string;
    telEt! : string;
    mailParent! : string;
    telParent! : string;
    formation! : Formation|any;
}