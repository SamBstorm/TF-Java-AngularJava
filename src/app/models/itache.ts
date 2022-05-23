import { TacheStatus } from "./tache-status";

export interface ITache {
    id : number;
    titre : string;
    dateCreation : Date;
    description? : string;
    dateFinale? : Date;
    status : TacheStatus;
}
