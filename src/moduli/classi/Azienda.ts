import type { IPartecipante, IAzienda } from '../interfacce.js'
import {logger} from './logger.js';

export class Azienda implements IAzienda{
	#nome: string;
	#settore: string; //settore di attività
	#descrizione: string;
	#posizioniAperte: string[];

	constructor (nome: string, settore: string, descrizione: string, posizioniAperte: string[]){
		this.#nome = nome;
		this.#settore = settore;
		this.#descrizione = descrizione;
		this.#posizioniAperte = posizioniAperte;
	}

	get nome() { return this.#nome; }
	get settore() { return this.#settore; }
	get descrizione() { return this.#descrizione; }
	get posizioniAperte() { return [...this.#posizioniAperte]; }

	offriPosizione(partecipante: IPartecipante, posizione: string): void {
		// Verifica se la posizione esiste nell'elenco dell'azienda
		if (this.#posizioniAperte.includes(posizione)) {
			const index = this.#posizioniAperte.indexOf(posizione);
			this.#posizioniAperte.splice(index, 1);
			logger.log(`L'azienda ${this.#nome} sta offrendo il posto di "${posizione}" a ${partecipante.nome} ${partecipante.cognome}.`)
		}
		else
			logger.error(`Errore: La posizione "${posizione}" non è tra quelle aperte in ${this.#nome}.`)
	}


}
