//import de classe
import {ZooAnimal} from './zoo-v1';
import {Figure} from "./Figure";
import {Triangle} from "./Figure";
import {Losange} from "./Figure";
import {Fibonacci} from "./gof/Fibonacci";
import {Iterator} from "./gof/Iterator";

// Création d’instances de classes: objets
let flipper;
flipper = new ZooAnimal("Flipper", 30, 150);
let pandi = new ZooAnimal("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
//console.log(flipper.etatAlimentation());
//console.log(pandi.etatAlimentation());

//Exercice orienté objet
let t1 = new Triangle(5);
let t2 = new Triangle(10);
let l1 = new Losange(5, 6); // diagonale1, diagonale2
let l2 = new Losange(4, 4);

let figures:Figure[] = [t1, t2, l1, l2];
for(let f of figures){
    //console.log(f.rapport());
}

//Exercices sur la généricité

//fonction defaut avec des nombres
function defautSiNul(x: number, defaut: number): number {
    if (x == null)
        return defaut;
    else
        return x;
}

let maValeurParDefaut = 4;
let maValeur = 1;
//console.log(defautSiNul(maValeur, maValeurParDefaut));
maValeur = null;
//console.log(defautSiNul(maValeur, maValeurParDefaut));

//fonction defaut avec des chaînes de caractères
function defautSiNulString(x: string, defaut: string): string {
    if (x == null)
        return defaut;
    else
        return x;
}
let maValeurParDefaut2 = "Quatre";
let maValeur2 = "Un";
//console.log(defautSiNulString(maValeur2, maValeurParDefaut2));
maValeur2 = null;
//console.log(defautSiNulString(maValeur2, maValeurParDefaut2));

/*
• Les codes des 2 fonctions sont identiques
• Seuls les noms et les types diffèrent
• Dommage de dupliquer le code pour tous les types
• Et si on utilisait le type « any » ?
*/

function defautSiNulb(x: any, defaut: any): any {
    if (x == null)
        return defaut;
    else
        return x;
}
let maValeurParDefautb = 4;
let maValeurb = 1;
let r: number = defautSiNulb(maValeurb, maValeurParDefautb);
//console.log(r);
// On mélange les types string et number.
// Que va-t-on récupérer ?
let maValeur2b = "Deux";
r = defautSiNulb(maValeur2b, maValeurParDefautb);
//console.log(r);
//Comme on ne connait pas le type de retour possible qui peux changer selon le passage des
//arguments, on peut facilement planter sur un appel de fonction pour affecter des variables
//Il faudrait des variables de type any partout
//ON se se retrouve avec un r de type number qui contient un string a la fin

function defautSiNulg<T>(x: T, defaut: T): T {
    if (x == null)
        return defaut;
    else
        return x;
}
let nombreParDefautg = 4;
let nombreg = 1;
let nombreResg: number = defautSiNulg(nombreg, nombreParDefautg);
//console.log(nombreResg);
let chaineParDefautg = "Quatre";
let chaineg = "Un";
let chaineResg: string = defautSiNulg(chaineg, chaineParDefautg);
//console.log(chaineResg);
// Décommenter pour constater l'erreur à la compilation
//let chaineRese: string = defautSiNul(nombreg, chaineParDefautg);
//console.log(chaineRese);

interface Mesurable {
    length: number;
}
class Ruban implements Mesurable {
    length: number;
    constructor(length: number){
        this.length = length;
    }
}
function selectionnePetit<T extends Mesurable>(element: T, limite: number) : T {
    return element.length < limite ? element : null;
}
let ruban = new Ruban(10);
let chaine = "myLengthIs12";

let petitRuban = selectionnePetit(ruban, 20); //ruban étant mesurable on peut l'utiliser en param générique
let petiteChaine = selectionnePetit(chaine, 20); //chaine est une string on peut utiliser .length, car ça String implémente Mesurable
// Décommenter pour voir l'erreur de compilation
//let x = selectionnePetit(5, 20); //en revanche number n'implémente pas mesurable
//console.log(petitRuban);
//console.log(petiteChaine);

//Utilisation du DP Fibonacci
let suiteDeFibonacci;
suiteDeFibonacci = new Fibonacci(0, 1);
let objetB: Iterator;

for(objetB = suiteDeFibonacci.getIterator(20); objetB.hasNext();){
    let currentNumber = objetB.next();
    process.stdout.write(`${currentNumber},`);
}