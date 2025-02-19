// 1) Quali sono i tipi primitivi principali in TypeScript?
// string
// number
// boolean
// undefined
// null

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
let myName: string;
let myAge: number;
let typeScript: boolean;

myName = "Luca";
myAge = 19;
typeScript = true;

/* 3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name } */
const greet = (name: string) => {
  return "Ciao " + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const applyIVA = (price: number): number => {
  return price * 1.22;
};

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const concatAndLength = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

// 7) Cos'è un Type Union e come si scrive?
//    Un Type Union permette di specificare che una variabile può essere di uno o più tipi
//    Si usa il simbolo |
let example: string | number;
example = "test";
example = 123;

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let myVariable: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type GiornoDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";

/* 10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3] */
const arr1: number[] = [1, 2, 3];

const arr2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
let myTuple: [string, string, string, number, number] = ["uno", "due", "tre", 4, 5];

// 12) Qual è la differenza tra type e interface?
/* Le interface sono utilizzate per definire la forma degli oggetti e possono essere estese o implementate da classi
I type alias sono più flessibili, permettono di definire unioni, intersezioni e altri tipi complessi
In molti casi possono essere usati in modo intercambiabile, ma le interface offrono alcune funzionalità in più per l'estensione */

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

// 17) Crea un oggetto che implementi l'interfaccia Auto.

// 18) Cosa sono i Generics in TypeScript?

// 19) È possibile avere più tipi generici in un'interfaccia?

// 20) Crea un'interfaccia generica per una risposta API.
