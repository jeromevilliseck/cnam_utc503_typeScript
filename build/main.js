"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import de classe
var zoo_v1_1 = require("./zoo-v1");
var Figure_1 = require("./Figure");
var Figure_2 = require("./Figure");
var Fibonacci_1 = require("./gof/Fibonacci");
// Création d’instances de classes: objets
var flipper;
flipper = new zoo_v1_1.ZooAnimal("Flipper", 30, 150);
var pandi = new zoo_v1_1.ZooAnimal("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
//console.log(flipper.etatAlimentation());
//console.log(pandi.etatAlimentation());
//Exercice orienté objet
var t1 = new Figure_1.Triangle(5);
var t2 = new Figure_1.Triangle(10);
var l1 = new Figure_2.Losange(5, 6); // diagonale1, diagonale2
var l2 = new Figure_2.Losange(4, 4);
var figures = [t1, t2, l1, l2];
for (var _i = 0, figures_1 = figures; _i < figures_1.length; _i++) {
    var f = figures_1[_i];
    //console.log(f.rapport());
}
//Exercices sur la généricité
//fonction defaut avec des nombres
function defautSiNul(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var maValeurParDefaut = 4;
var maValeur = 1;
//console.log(defautSiNul(maValeur, maValeurParDefaut));
maValeur = null;
//console.log(defautSiNul(maValeur, maValeurParDefaut));
//fonction defaut avec des chaînes de caractères
function defautSiNulString(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var maValeurParDefaut2 = "Quatre";
var maValeur2 = "Un";
//console.log(defautSiNulString(maValeur2, maValeurParDefaut2));
maValeur2 = null;
//console.log(defautSiNulString(maValeur2, maValeurParDefaut2));
/*
• Les codes des 2 fonctions sont identiques
• Seuls les noms et les types diffèrent
• Dommage de dupliquer le code pour tous les types
• Et si on utilisait le type « any » ?
*/
function defautSiNulb(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var maValeurParDefautb = 4;
var maValeurb = 1;
var r = defautSiNulb(maValeurb, maValeurParDefautb);
//console.log(r);
// On mélange les types string et number.
// Que va-t-on récupérer ?
var maValeur2b = "Deux";
r = defautSiNulb(maValeur2b, maValeurParDefautb);
//console.log(r);
//Comme on ne connait pas le type de retour possible qui peux changer selon le passage des
//arguments, on peut facilement planter sur un appel de fonction pour affecter des variables
//Il faudrait des variables de type any partout
//ON se se retrouve avec un r de type number qui contient un string a la fin
function defautSiNulg(x, defaut) {
    if (x == null)
        return defaut;
    else
        return x;
}
var nombreParDefautg = 4;
var nombreg = 1;
var nombreResg = defautSiNulg(nombreg, nombreParDefautg);
//console.log(nombreResg);
var chaineParDefautg = "Quatre";
var chaineg = "Un";
var chaineResg = defautSiNulg(chaineg, chaineParDefautg);
var Ruban = /** @class */ (function () {
    function Ruban(length) {
        this.length = length;
    }
    return Ruban;
}());
function selectionnePetit(element, limite) {
    return element.length < limite ? element : null;
}
var ruban = new Ruban(10);
var chaine = "myLengthIs12";
var petitRuban = selectionnePetit(ruban, 20); //ruban étant mesurable on peut l'utiliser en param générique
var petiteChaine = selectionnePetit(chaine, 20); //chaine est une string on peut utiliser .length, car ça String implémente Mesurable
// Décommenter pour voir l'erreur de compilation
//let x = selectionnePetit(5, 20); //en revanche number n'implémente pas mesurable
//console.log(petitRuban);
//console.log(petiteChaine);
//Utilisation du DP Fibonacci
var suiteDeFibonacci;
suiteDeFibonacci = new Fibonacci_1.Fibonacci(0, 1);
var objetB;
for (objetB = suiteDeFibonacci.getIterator(20); objetB.hasNext();) {
    var currentNumber = objetB.next();
    process.stdout.write(currentNumber + ",");
}
//# sourceMappingURL=main.js.map