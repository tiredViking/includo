import type { IPartecipante, ICorso, IAzienda } from "./interfacce.js";
export declare class Partecipante implements IPartecipante {
    #private;
    constructor(nome: string, cognome: string, paeseOrigine: string, livelloDiIstruzione: string, lingue: string[], ambito: string);
    get nome(): string;
    get cognome(): string;
    get paeseOrigine(): string;
    get livelloDiIstruzione(): string;
    get lingue(): string[];
    get ambito(): string;
    set livelloDiIstruzione(livello: string);
    set lingue(lingue: string[]);
    set ambito(ambito: string);
    iscrivitiCorso(corso: ICorso): void;
}
export declare class Corso implements ICorso {
    #private;
    constructor(titoloCorso: string, descrizione: string, settore: string, durata: string, iscritti?: IPartecipante[]);
    aggiungiPartecipante(partecipante: IPartecipante): void;
    get titoloCorso(): string;
    get descrizione(): string;
    get settore(): string;
    get durata(): string;
    get iscritti(): IPartecipante[];
}
export declare class Azienda implements IAzienda {
    #private;
    constructor(nome: string, settore: string, descrizione: string, posizioniAperte: string[]);
    get nome(): string;
    get settore(): string;
    get descrizione(): string;
    get posizioniAperte(): string[];
    offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
//# sourceMappingURL=classi.d.ts.map