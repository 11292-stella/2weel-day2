/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 5
let n2 = 10
if (n1 < n2) {
  console.log("n1 è più grande")
} else {
  console.log("n2 è più grande")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let nuMb = 5
let nuMb2 = 8

if (nuMb === nuMb2) {
  console.log("equal")
} else {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let mod = 15
let mod2 = 10
console.log(15 % 10)

if (mod % mod2) {
  console.log("é divisibile")
} else {
  console.log("non è divisibile")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primo = 6
let secondo = 2

console.log(primo + secondo)
if (primo + primo + primo + primo) {
  console.log("con addizione sarà otto")
} else {
  console.log("sarà otto")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 45
const conto = 10
const contoDaSuperare = 50
if (totalShoppingCart > contoDaSuperare) {
  console.log("spedizione gratuita")
} else {
  console.log(totalShoppingCart + conto, "spedizione con aggiunta")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totaleAcquistiCarta = 45
const scontoPercentuale = 20
const contoTotDaSuperare = 50
console.log(totaleAcquistiCarta * scontoPercentuale)
let scontoapplicato = totaleAcquistiCarta - scontoPercentuale
if (scontoapplicato > contoTotDaSuperare) {
  console.log("spedizione gratuita")
} else {
  console.log(scontoapplicato, "spedizione con aggiunta")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const variabili = {
  primoNome: 20,
  secondAge: 30,
  terzoColor: 40,
}

if (variabili.secondAge <= 50 || variabili.primoNome === 70) {
  console.log(100)
} else {
  console.log(200)
}

//risultato 100

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let xx = 10
let yy = "ciao"

typeof xx

if (typeof xx === "number") {
  console.log("xx è numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let PariDispari = 10
if (PariDispari % 2 === 0) {
  console.log("pari")
} else {
  console.log("dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7
if (val < 5) {
  console.log("Meno di 10")
} else if (val < 5) {
  console.log("Meno di 5")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "torono"
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const array = []
array.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
array[9] = 100
