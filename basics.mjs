/**
 * Schreibe je eine Funtion add, subtract, multiply, divide, die die
 * jeweilige Grundrechenart auf die beiden übergebenen Parameter A und B
 * anwendet. Verwende Arrow-Funktionen.
 */
// export const ...
// ...
// ...

import { J } from "vitest/dist/chunks/reporters.QZ837uWx.js";

// ...
export const add = (a, b) => a+b;
export const subtract = (a, b) => a-b;
export const multiply = (a, b) => a*b;
export const divide = (a, b) => a/b;

/**
 * Schreibe eine Funktion, die eine Temeratur in Celsius in eine Temperatur in
 * Fahrenheit umrechnet.
 * 
 * @param {number} celsius 
 * @return {number}
 */
export function inFahrenheit (celsius) {
    
    let fahrenheit = celsius*9/5+32;
    return fahrenheit;
    // ...
}

/**
 * Schreibe eine Funktion, die eine Temeratur in Fahrenheit in eine Temperatur
 * in Celsius umrechnet.
 * 
 * @param {number} celsius 
 * @return {number}
 */
export const inCelsius = (fahrenheit) => {
    
    let celsius = (fahrenheit - 32)*5/9;
    return celsius;
    // ...
}

/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl gerade ist.
 * 
 * @param {int} number
 * @return {boolean}
 */
// export const isEven = () => undefined // TODO

export function isEven(number) {
    if (number%2 === 0) {
        return true;
    } else {
        return false;
    };
}
/**
 * Schreibe eine Funktion, die prüft, ob eine Zahl ungerade ist.
 * 
 * @param {int} number
 * @return {boolean}
 */
// export const isOdd = () => undefined // TODO
export function isOdd(number) {
    if (number%2 !== 0) {
        return true;
    } else {
        return false;
    }
}
// Kontrollfluss

// if

/**
 * Schreibe eine Funktion, die abhängig von dem als Zahl eingegebenen Monat die
 * passende Jahreszeit zurückgibt. Und zwar
 * 
 * "Frühling" für die Monate März, April, Mai
 * "Sommer" für die Monate Juni, Juli, August
 * "Herbst" für die Monate September, Oktober, November und
 * "Winter" für die Monate Dezember, Januar und Februar.
 *
 * @param {int} monat 
 * @returns {string} Jahreszeit
 */
export function jahreszeit (monat) {
    if (monat === 3 || monat === 4 || monat === 5) {
        return "Frühling";
    } else if (monat === 6 || monat === 7 || monat === 8) {
        return "Sommer";
    } else if (monat === 9 || monat === 10 || monat === 11) {
        return "Herbst";
    } else if (monat === 12 || monat === 1 || monat === 2) {
        return "Winter";
    } else {
        return "there is no such monat number";
    };
    // ...
};

/**
 * Schreibe eine Funktion, die die Umsatzsteuer anhand des Umsatzes und des
 * Steuerjahres berechnet. Der Steuersatz beträgt 19%. Liegt der Umsatz unter
 * der Freigrenze von 17.500 EUR (für die Steuerjahre 2003-2019) bzw. 22.000 EUR
 * (für die Steuerjahre ab 2020) soll die Kleinunternehmerregelung angewendet
 * und keine Umsatzsteuer berechnet werden. Der Rückgabewert ist dann 0.
 * 
 * @param {number} umsatz 
 * @param {int} steuerjahr 
 * @returns {number}
 */
export function umsatzsteuer (umsatz, steuerjahr = 2024) {
    if (umsatz <= 17500 && steuerjahr<=2019 && steuerjahr>= 2003) {
        return 0;
    } else if (umsatz <= 22000 && steuerjahr >= 2020) {
        return 0;
    } else {
        return umsatz/100*19;
    }
}

// switch

/**
 * Schreibe eine Funktion, die den Flächeninhalt verschiedener geometrischer
 * Formen berechnet. Die Funktion soll zwei Argumente erhalten:
 * Den Namen der geometrischen Form (circle, triangle, rectangle), sowie die
 * dafür relevanten Parameter als ein Objekt.
 * Für die Berechnung eines Kreises wird der Radius (radius) benötigt.
 * Für die Berechnung eines Dreieckes sowie eines Rechteckes werden die Länge
 * der Grundseite (base) sowie die Höhe (height) benötigt.
 * 
 * @param {string} shape 
 * @param {object} params 
 * @returns {number}
 */
export const area = (shape, params) => {
    if (shape === "circle") {
        return Math.PI * (params.radius * params.radius);
    } else if (shape === "triangle") {
        return 1/2*params.base*params.height;
    } else if (shape === "rectangle") {
        return params.base*params.height;
    }
    // ...
}

// loops

/** JDKA
 * Schreibe eine Funktion, die alle Karten eines Kartenspiels jeweils mit ihrer
 * Farbe (Clubs, Spades, Hearts, Diamonds) und ihrem Wert (2 - 10, J, K, Q, A)
 * erzeugt.
 * Die Karten werden als Array bestehend aus Farbe und Wert dargestellt und alle
 * Karten in einem Array gesammelt zurückgegeben.
 * 
 * @returns {[[string, string]]}
 */
// export function deckOfCards () {
//     let fullDeck = [];
//     for (let i=2; i<=14; i++){
//         if (i<=10) {
//             fullDeck.push(["Clubs", i]);
//         } else {
//             const newVal = {
//                 11: "J",
//                 12: "Q",
//                 13: "K",
//                 14: "A"
//             };
//             fullDeck.push(["Clubs", newVal[i]])
//         }
//     };
//     for (let i=2; i<=14; i++){
//         if (i<=10) {
//             fullDeck.push(["Spades", i]);
//         } else {
//             const newVal = {
//                 11: "J",
//                 12: "Q",
//                 13: "K",
//                 14: "A"
//             };
//             fullDeck.push(["Spades", newVal[i]])
//         }
//     };
//     for (let i=2; i<=14; i++){
//         if (i<=10) {
//             fullDeck.push(["Hearts", i]);
//         } else {
//             const newVal = {
//                 11: "J",
//                 12: "Q",
//                 13: "K",
//                 14: "A"
//             };
//             fullDeck.push(["Hearts", newVal[i]])
//         }
//     }
//     for (let i=2; i<=14; i++){
//         if (i<=10) {
//             fullDeck.push(["Diamonds", i]);
//         } else {
//             const newVal = {
//                 11: "J",
//                 12: "Q",
//                 13: "K",
//                 14: "A"
//             };
//             fullDeck.push(["Diamonds", newVal[i]])
//         }
//     }
//     return fullDeck;
// };

/**
 * Schreibe eine Funktion, die die ersten N Antworten für das FizzBuzz-Spiel
 * erzeugt und auf der Konsole ausgibt.
 * 
 * @param {int} n 
 * @see https://de.wikipedia.org/wiki/Fizz_buzz
 */
export function fizzbuzz (n) {
    const fizz = 3;
    const buzz = 5;
    for (n=1; n<=100; n++) {
        if ( n%fizz === 0) {
            console.log("fizz")
        } else if (n%buzz === 0 ) {
            console.log("buzz")
        } else {
            console.log(n);
        }
    }
    // ...
}

// recursion

/**
 * Schreibe eine rekursive Funktion, die die N-te Fibonacci-Zahl berechnet.
 * 
 * @param {int} n 
 * @returns {int} n-th Fibonacci number
 * @see https://de.wikipedia.org/wiki/Fibonacci-Folge
 */

export function fibonacci(n, a=0, b=1) {
        if (n<=0){
            return;
        } else {
            console.log(a);
            let c = a+b;
            a = b;
            b = c;
            n = n-1
            return fibonacci(n, a, b);
        }
};
        
    // ...
