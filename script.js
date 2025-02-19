// 1) Quali sono i tipi primitivi principali in TypeScript?
// string
// number
// boolean
// undefined
// null
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName;
var myAge;
var typeScript;
myName = "Luca";
myAge = 19;
typeScript = true;
/* 3) Tipizza il parametro della seguente funzione:
const greet = (name) => { return "Ciao " + name } */
var greet = function (name) {
    return "Ciao " + name;
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => { return a + b }
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var applyIVA = function (price) {
    return price * 1.22;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var concatAndLength = function (str1, str2) {
    return (str1 + str2).length;
};
// 7) Cos'è un Type Union e come si scrive?
//    Un Type Union permette di specificare che una variabile può essere di uno o più tipi
//    Si usa il simbolo |
var example;
example = "test";
example = 123;
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var myVariable;
/* 10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3] */
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
var myTuple = ["uno", "due", "tre", 4, 5];
var studenti = [
    { nome: "Mario", voto: 8 },
    { nome: "Luigi", voto: 9 },
];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
/* I generics consentono di creare componenti riutilizzabili e tipizzati,
che possono lavorare con diversi tipi mantenendo la sicurezza dei tipi.
Permettono di definire funzioni, classi o interfacce che operano su un tipo generico,
specificato al momento dell'utilizzo */
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.
