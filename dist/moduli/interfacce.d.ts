export interface ICorso {
    titoloCorso: string;
    descrizione: string;
    settore: string;
    durata: string;
    iscritti: IPartecipante[];
    aggiungiPartecipante(partecipante: IPartecipante): void;
}
export interface IPartecipante {
    nome: string;
    cognome: string;
    paeseOrigine: string;
    livelloDiIstruzione: string;
    lingue: string[];
    ambito: string;
    iscrivitiCorso(corso: ICorso): void;
}
export interface IAzienda {
    nome: string;
    settore: string;
    descrizione: string;
    posizioniAperte: string[];
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
//# sourceMappingURL=interfacce.d.ts.map