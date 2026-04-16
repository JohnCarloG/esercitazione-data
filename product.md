# Esercitazione Angular — Concessionaria di Auto

<!-- Composizione del gruppo:
  - [Nome Cognome]
  - [Nome Cognome]
  - [Nome Cognome]
  Link repository: https://github.com/...
-->

## Obiettivo

Realizzare un'applicazione Angular che simuli il catalogo di una concessionaria di auto. L'utente può sfogliare le auto disponibili, visualizzarne i dettagli cliccando su una scheda, aggiungere nuovi modelli e rimuovere quelli esistenti. Il progetto serve a mettere in pratica l'uso di componenti, comunicazione tramite `@Input` e manipolazione di array.

---

## Contesto applicativo

L'applicazione rappresenta il portale interno di una concessionaria. Le auto sono i "prodotti" del catalogo: ogni vettura ha una scheda riassuntiva nella lista e una pagina di dettaglio accessibile con un click.

---

## Struttura dell'applicazione

L'app è composta da due componenti principali.

**`ProductListComponent`** (catalogo) è il componente principale: mantiene l'array delle auto, le mostra come lista di schede e gestisce le azioni dell'utente — selezione ed eliminazione di un'auto. Al click su una scheda, l'auto selezionata viene passata al componente di dettaglio.

**`ProductDetailComponent`** (scheda auto) riceve tramite `@Input` l'auto selezionata e ne mostra tutti i dettagli. Se nessuna auto è selezionata, visualizza un messaggio che invita l'utente a scelierne una dal catalogo.

---

## Modello dati

Ogni auto segue questa interfaccia:

```ts
interface Product {
  name: string;       // es. "Alfa Romeo Giulia"
  price: number;      // prezzo in €
  description: string; // breve descrizione del modello
}
```

Il catalogo iniziale deve contenere almeno 5 auto.

---

## Funzionalità richieste

Il catalogo va reso con `*ngFor`, mostrando ogni auto come una scheda. Cliccando su un'auto, i suoi dettagli appaiono nel `ProductDetailComponent` tramite `@Input`.

Accanto a ogni auto è presente un pulsante **Elimina** per rimuoverla dal catalogo. È disponibile anche un modulo per aggiungere nuove auto alla lista.

---

## Stilizzazione

Usare Bootstrap o CSS personalizzato per un'interfaccia che ricordi quella di un portale automotive: leggibile, ordinata e con un aspetto professionale.

---

## Divisione di file e componenti per lavoro in parallelo

**⚠️ IMPORTANTE**: Ogni membro del gruppo deve attenersi RIGOROSAMENTE a questa divisione quando lavora in Live Share. Ciò previene conflitti di merge e consente il lavoro parallelo efficiente.

### **John — Componenti Angular e gestione**

Lavora su questi file:

```
src/app/product-list/product-list.component.ts
src/app/product-list/product-list.component.spec.ts
src/app/product-detail/product-detail.component.ts
src/app/product-detail/product-detail.component.spec.ts
src/app/app.ts
```

**Responsabilità**:
- Logica della lista (array, selezione prodotto)
- Comunicazione tra componenti tramite `@Input`
- Metodo per passare il prodotto selezionato
- Binding dei dati nei template

---

### **Roberto — Gestione dati e form**

Lavora su questi file:

```
src/app/models/product.interface.ts
src/app/data/products.data.ts
src/app/product-list/product-list.component.ts (solo metodi CRUD: add, delete)
src/app/forms/ (modulo per aggiungere auto)
```

**Responsabilità**:
- Definizione dell'interfaccia `Product`
- Array iniziale di auto (almeno 5)
- Logica di eliminazione prodotti
- Logica di aggiunta nuovi prodotti
- Validazione del modulo (se necessaria)

---

### **Francesco — Frontend, UI & UX**

Lavora su questi file:

```
✅ src/app/app.component.html        — layout shell completo
✅ src/app/app.component.css         — grid, header, responsive
✅ src/styles.css                    — design system "Salone Italiano"

⏳ src/app/app.component.html        — aggiungere binding [selectedProduct] (in attesa fix di John)
❌ src/app/product-list/product-list.component.html   — da fare
❌ src/app/product-list/product-list.component.css    — da fare
❌ src/app/product-detail/product-detail.component.html — da fare
❌ src/app/product-detail/product-detail.component.css  — da fare
```

**Responsabilità**:
- Layout e template HTML per la lista
- Template HTML per i dettagli
- Stilizzazione con Bootstrap o CSS personalizzato
- Accessibilità e responsività
- Interfaccia professionale e intuitiva

---

## Flusso di lavoro consigliato per Live Share

1. **Roberto** define prima il modello dati (interface Product)
2. **John** collega i componenti e il binding
3. **Francesco** crea i template e gli stili
4. **Tutti** testano insieme l'applicazione
5. Commit frequenti per checkpoint

---

## Note organizzative

Il progetto va versionato su GitHub. Tutti i membri del gruppo devono conoscere l'intero codice, incluse le parti scritte dagli altri: in fase di interrogazione/presentazione potranno essere chiesti dettagli su qualsiasi sezione. L'assenza di un componente non giustifica la mancata partecipazione; dichiarare di non aver potuto lavorare per colpa di assenze altrui comporta una valutazione pari a **1 per tutto il gruppo**.
