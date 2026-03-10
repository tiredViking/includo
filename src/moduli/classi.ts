// src/moduli/classi.ts
import type {IPartecipante, ICorso, IAzienda} from "./interfacce.js";

export class Partecipante implements IPartecipante {
    #nome: string;
    #cognome: string;
    #paeseOrigine: string;
    #livelloDiIstruzione: string;
    #lingue: string[];
    #ambito: string;

    constructor(
        nome: string,
        cognome: string,
        paeseOrigine: string,
        livelloDiIstruzione: string,
        lingue: string[],
        ambito: string
    ) {
				this.#nome = nome;
        this.#cognome = cognome;
        this.#paeseOrigine = paeseOrigine;
        this.#livelloDiIstruzione = livelloDiIstruzione;
        this.#lingue = lingue;
        this.#ambito = ambito;
    }

    get nome() { return this.#nome; }
    get cognome() { return this.#cognome; }
    get paeseOrigine() { return this.#paeseOrigine; }
    get livelloDiIstruzione() { return this.#livelloDiIstruzione; }
    get lingue() { return [...this.#lingue]; }
    get ambito() { return this.#ambito; }

	//setter per campi variabili nel tempo (livelloDiIstruzione, lingue, ambito)
		set livelloDiIstruzione(livello: string) { this.#livelloDiIstruzione = livello; }
		set lingue(lingue: string[]) { this.#lingue = lingue; }
		set ambito(ambito: string) { this.#ambito = ambito; }

    iscrivitiCorso(corso: ICorso): void {
			if(!(corso instanceof Corso)) 
				console.warn("Il corso inserito non è valido; riprovare.");
			else { 
				corso.aggiungiPartecipante(this);
			}
		}
}

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
			console.log(`Iscrizione di ${partecipante.nome} ${partecipante.cognome} al corso "${this.#titoloCorso}" completata.`);
			return;
		}	else {
			console.error(`${partecipante.nome} ${partecipante.cognome} è già iscritto al corso "${this.#titoloCorso}".`);
			return;
		}
	}

	get titoloCorso() { return this.#titoloCorso; }
	get descrizione() { return this.#descrizione; }
	get settore() { return this.#settore; }
	get durata() { return this.#durata; }
	get iscritti() { return this.#iscritti; }

}

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
            console.log(`L'azienda ${this.#nome} sta offrendo il posto di "${posizione}" a ${partecipante.nome} ${partecipante.cognome}.`);
        } 
				else 
					console.error(`Errore: La posizione "${posizione}" non è tra quelle aperte in ${this.#nome}.`);
	}
}
