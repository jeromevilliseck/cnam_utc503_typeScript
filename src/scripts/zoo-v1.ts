export class ZooAnimal {
// Attributs
    private nom: string;
    private age: number;
    private poids: number;
    private quantiteNourritureTotale: number;
    private bienNourri: boolean;

// Constructeur
    constructor(nom: string, age: number, poids: number) {
        this.nom = nom;
        this.age = age;
        this.poids = poids;
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }

// Méthodes
    nouvelleJournee() {
        this.quantiteNourritureTotale = 0;
        this.bienNourri = false;
    }

    recoitNourriture(quantite: number) {
        this.quantiteNourritureTotale += quantite;
        this.bienNourri = this.quantiteNourritureTotale > (this.poids / 5);
    }

    etatAlimentation() {
        let etat = this.nom + ", " + this.age + " ans, a reçu " +
            this.quantiteNourritureTotale + "Kg de nourriture.";
        if (this.bienNourri) {
            etat += " " + this.nom + " est bien nourri.";
        }
        return etat;
    }
}