import type { IPartecipante, ICorso, } from "../interfacce.js";
import { logger } from "./logger.js";

export class Corso implements ICorso {
	#titoloCorso: string;
	#descrizione: string;
	#settore: string;
	#durata: string;
	#iscritti: IPartecipante[] = [];

	constructor(titoloCorso: string,descrizione: string,settore: string, durata: string, iscritti?: IPartecipante[]){
		this.#titoloCorso = titoloCorso;
		this.#descrizione = descrizione;
		this.#settore = settore;
		this.#durata = durata;
		if (iscritti !== undefined) this.#iscritti = [...iscritti];
	}

	aggiungiPartecipante(partecipante: IPartecipante): void {
		// controlla se presente
		if (!this.#iscritti.includes(partecipante)) {
			this.#iscritti.push(partecipante);
			logger.log(`Iscrizione di ${partecipante.nome} ${partecipante.cognome} al corso "${this.#titoloCorso}" completata.`)
			return;
		}	else {
			logger.error(`${partecipante.nome} ${partecipante.cognome} è già iscritto al corso "${this.#titoloCorso}".`)
			return;
		}
	}

	get titoloCorso() { return this.#titoloCorso; }
	get descrizione() { return this.#descrizione; }
	get settore() { return this.#settore; }
	get durata() { return this.#durata; }
	get iscritti() { return [...this.#iscritti]; }

}
