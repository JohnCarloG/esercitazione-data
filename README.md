# AutoGalleria — Portale Interno Concessionaria

Applicazione web per la gestione del catalogo vetture di una concessionaria di auto.
Realizzata come progetto di gruppo nell'ambito di un'esercitazione universitaria su Angular.

---

## Di cosa si tratta

AutoGalleria è un portale interno che consente al personale della concessionaria di:

- **Sfogliare il catalogo** di auto disponibili, ciascuna con foto, brand, carburante, cavalli e prezzo
- **Visualizzare i dettagli** di un'auto cliccando sulla sua scheda
- **Aggiungere nuove vetture** al catalogo tramite un modulo dedicato
- **Rimuovere un'auto** direttamente dalla lista

L'interfaccia è pensata per essere professionale e immediata, con un'estetica ispirata ai portali automotive italiani.

---

## Come avviarlo in locale

È necessario avere [Node.js](https://nodejs.org/) installato sul proprio computer.

```bash
# 1. Entra nella cartella del progetto
cd app

# 2. Installa le dipendenze
npm install

# 3. Avvia il server di sviluppo
npm start
```

Apri il browser su **http://localhost:4200** per vedere l'applicazione.

---

## Struttura del progetto

| Area | Responsabile |
|---|---|
| Interfaccia, layout e stili | Francesco |
| Logica dei componenti e comunicazione tra essi | John |
| Modello dati, catalogo iniziale e form di aggiunta | Roberto |

---

## Tecnologie utilizzate

- [Angular 21](https://angular.io/) — framework per applicazioni web
- CSS personalizzato con variabili di design (nessun framework esterno)
- [Lucide](https://lucide.dev/) — icone vettoriali
