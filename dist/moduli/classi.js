export class Partecipante {
    #nome;
    #cognome;
    #paeseOrigine;
    #livelloDiIstruzione;
    #lingue;
    #ambito;
    constructor(nome, cognome, paeseOrigine, livelloDiIstruzione, lingue, ambito) {
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
    set livelloDiIstruzione(livello) { this.#livelloDiIstruzione = livello; }
    set lingue(lingue) { this.#lingue = lingue; }
    set ambito(ambito) { this.#ambito = ambito; }
    iscrivitiCorso(corso) {
        if (!(corso instanceof Corso))
            console.warn("Il corso inserito non è valido; riprovare.");
        else {
            corso.aggiungiPartecipante(this);
        }
    }
}
export class Corso {
    #titoloCorso;
    #descrizione;
    #settore;
    #durata;
    #iscritti = [];
    constructor(titoloCorso, descrizione, settore, durata, iscritti) {
        this.#titoloCorso = titoloCorso;
        this.#descrizione = descrizione;
        this.#settore = settore;
        this.#durata = durata;
        if (iscritti !== undefined)
            this.#iscritti = [...iscritti];
    }
    aggiungiPartecipante(partecipante) {
        // controlla se presente
        if (!this.#iscritti.includes(partecipante)) {
            this.#iscritti.push(partecipante);
            console.log(`Iscrizione di ${partecipante.nome} ${partecipante.cognome} al corso "${this.#titoloCorso}" completata.`);
            return;
        }
        else {
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
export class Azienda {
    #nome;
    #settore; //settore di attività
    #descrizione;
    #posizioniAperte;
    constructor(nome, settore, descrizione, posizioniAperte) {
        this.#nome = nome;
        this.#settore = settore;
        this.#descrizione = descrizione;
        this.#posizioniAperte = posizioniAperte;
    }
    get nome() { return this.#nome; }
    get settore() { return this.#settore; }
    get descrizione() { return this.#descrizione; }
    get posizioniAperte() { return [...this.#posizioniAperte]; }
    offriPosizione(partecipante, posizione) {
        // Verifica se la posizione esiste nell'elenco dell'azienda
        if (this.#posizioniAperte.includes(posizione)) {
            console.log(`L'azienda ${this.#nome} sta offrendo il posto di "${posizione}" a ${partecipante.nome} ${partecipante.cognome}.`);
        }
        else
            console.error(`Errore: La posizione "${posizione}" non è tra quelle aperte in ${this.#nome}.`);
    }
}
//# sourceMappingURL=classi.js.map