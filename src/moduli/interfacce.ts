// src/moduli/interfacce.ts

export interface ICorso {
	titoloCorso: string;
	descrizione: string;
	settore: string; //settore professionale
	durata: string;
	iscritti: IPartecipante[];

	aggiungiPartecipante(partecipante: IPartecipante): void;
}


export interface IPartecipante {
	nome: string;
	cognome: string;
	paeseOrigine: string;
	livelloDiIstruzione: string;
	lingue: string[]; // competenze linguistiche
	ambito: string; // ambito di formazione di interesse 

	iscrivitiCorso(corso: ICorso): void;
}

export interface IAzienda {
	nome: string;
	settore: string; //settore di attività
	descrizione: string;
	posizioniAperte: string[];
	
	offriPosizione(partecipante: IPartecipante, posizione: string): void;
}
