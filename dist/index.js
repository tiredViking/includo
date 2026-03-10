// index.ts
import { Partecipante, Corso, Azienda } from "./moduli/classi.js";
// Partecipanti
const studente1 = new Partecipante("Pedro", "Sanchez", "Spagna", "Diploma", ["Inglese, Spagnolo"], "Logistica");
const studente2 = new Partecipante("Omar", "Saif", "Marocco", "Laurea", ["Francese, Arabo"], "Finanza");
const studente3 = new Partecipante("Amina", "Toure", "Senegal", "Diploma", ["Francese", "Wolof"], "Ristorazione");
// Corsi
const corsoLogistica = new Corso("Management Logistico", "Corso sulla gestione magazzino", "Logistica", "6 mesi");
const corsoFinanza = new Corso("Management Finanziario", "Corso di finanza aziendale", "Finanza", "1 anno", [studente2]);
const corsoRistorazione = new Corso("Operatore di Sala e Cucina", "Corso pratico per il settore della ristorazione", "Ristorazione", "4 mesi");
// Aziende
const aziendaLogistica = new Azienda("Global Express", "Logistica", "Spedizioni internazionali", ["Magazziniere", "Responsabile flotta"]);
const aziendaFinanza = new Azienda("Financing S.p.A.", "Finanza", "Consulenza finanziaria per aziende", ["Consulente", "Responsabile amministrativo", "Contabile"]);
const aziendaRistorazione = new Azienda("Ristorante Mediterraneo", "Ristorazione", "Ristorante con cucina fusion mediterranea", ["Cameriere", "Aiuto cuoco"]);
// ─────────────────────────────────────────────
// Test iscrizioni
// ─────────────────────────────────────────────
console.log("\n=== ISCRIZIONI AI CORSI ===");
studente1.iscrivitiCorso(corsoLogistica); // successo
studente1.iscrivitiCorso(corsoFinanza); // più iscrizioni permesse
studente2.iscrivitiCorso(corsoFinanza); // già iscritto (pre-iscritto nel costruttore)
studente3.iscrivitiCorso(corsoRistorazione); // successo
studente1.iscrivitiCorso(corsoLogistica); // duplicato
// ─────────────────────────────────────────────
// Test offerte di lavoro
// ─────────────────────────────────────────────
console.log("\n=== OFFERTE DI LAVORO ===");
aziendaLogistica.offriPosizione(studente1, "Magazziniere"); // successo
aziendaLogistica.offriPosizione(studente1, "Magazziniere"); // posizione non più disponibile
aziendaFinanza.offriPosizione(studente2, "Consulente"); // successo
aziendaFinanza.offriPosizione(studente2, "Direttore"); // posizione inesistente
aziendaRistorazione.offriPosizione(studente3, "Aiuto cuoco"); // successo
// ─────────────────────────────────────────────
// Verifica stato finale
// ─────────────────────────────────────────────
console.log("\n=== STATO FINALE ===");
console.log(`Iscritti a "${corsoLogistica.titoloCorso}":`, corsoLogistica.iscritti.map(p => `${p.nome} ${p.cognome}`));
console.log(`Iscritti a "${corsoFinanza.titoloCorso}":`, corsoFinanza.iscritti.map(p => `${p.nome} ${p.cognome}`));
console.log(`Iscritti a "${corsoRistorazione.titoloCorso}":`, corsoRistorazione.iscritti.map(p => `${p.nome} ${p.cognome}`));
console.log(`Posizioni aperte in ${aziendaLogistica.nome}:`, aziendaLogistica.posizioniAperte);
console.log(`Posizioni aperte in ${aziendaFinanza.nome}:`, aziendaFinanza.posizioniAperte);
console.log(`Posizioni aperte in ${aziendaRistorazione.nome}:`, aziendaRistorazione.posizioniAperte);
//# sourceMappingURL=index.js.map