import type { ICorso, IIscrivibile } from "../interfacce.js";
import {logger} from "./logger.js";

export class PartecipanteIscrivibile implements IIscrivibile{
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
    ambito: string,
  ) {
    this.#nome = nome;
    this.#cognome = cognome;
    this.#paeseOrigine = paeseOrigine;
    this.#livelloDiIstruzione = livelloDiIstruzione;
    this.#lingue = lingue;
    this.#ambito = ambito;
  }

  get nome() {
    return this.#nome;
  }
  get cognome() {
    return this.#cognome;
  }
  get paeseOrigine() {
    return this.#paeseOrigine;
  }
  get livelloDiIstruzione() {
    return this.#livelloDiIstruzione;
  }
  get lingue() {
    return [...this.#lingue];
  }
  get ambito() {
    return this.#ambito;
  }

  //setter per campi variabili nel tempo (livelloDiIstruzione, lingue, ambito)
  set livelloDiIstruzione(livello: string) {
    this.#livelloDiIstruzione = livello;
  }
  set lingue(lingue: string[]) {
    this.#lingue = lingue;
  }
  set ambito(ambito: string) {
    this.#ambito = ambito;
  }

  iscrivitiCorso(corso: ICorso): void {

		logger.log(`Tentativo di iscrizione al corso: ${corso.titoloCorso}...`);
    corso.aggiungiPartecipante(this);
  }
}
