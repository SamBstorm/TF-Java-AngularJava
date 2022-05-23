import { ITache } from "./itache";
import { TacheStatus } from "./tache-status";

export class Tache implements ITache {
    public id: number;
    public titre: string;
    public dateCreation: Date;
    public description?: string | undefined;
    public dateFinale?: Date | undefined;
    public status: TacheStatus;

    constructor(titre: string, description? : string, dateFinale? : Date, dateCreation : Date = new Date(), status : TacheStatus = TacheStatus.EnAttente){
        this.id = 0;
        if(titre.trim().length <= 0) throw new Error("Titre doit avoir au moins un caractère.");
        this.titre = titre;
        this.dateCreation = dateCreation;
        this.status = status;
        this.description = description;
        if(dateFinale && dateFinale <= dateCreation) throw new Error("La deadline doit être supérieur à la date de création");
        this.dateFinale = dateFinale;
    }
}
