"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.ZooAnimal = ZooAnimal;
//# sourceMappingURL=zoo-v1.js.map