var ZooAnimal = /** @class */ (function () {
    // Constructeur
    function ZooAnimal(nom, age, poids) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }
    // Méthodes
    ZooAnimal.prototype.nouvelleJournee = function () {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    };
    ZooAnimal.prototype.recoitNourriture = function (quantite) {
        this.quantiteNourritureTotale += quantite;
        this.bienNourri = this.quantiteNourritureTotale > (this.poids / 5);
    };
    ZooAnimal.prototype.etatAlimentation = function () {
        var etat = this.nom + ", " + this.age + " ans, a reçu " +
            this.quantiteNourritureTotale + "Kg de nourriture.";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    };
    return ZooAnimal;
}());
// Création d’instances de classes: objets
var flipper;
flipper = new ZooAnimal("Flipper", 30, 150);
var pandi = new ZooAnimal("Pandi", 10, 80);
// Appels de méthodes sur les objets
flipper.nouvelleJournee();
pandi.nouvelleJournee();
flipper.recoitNourriture(10);
pandi.recoitNourriture(10);
flipper.recoitNourriture(25);
alert(flipper.etatAlimentation());
alert(pandi.etatAlimentation());
