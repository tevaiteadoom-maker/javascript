function genererEleves() {
    let taille_minimum = 7;
    let taille_maximum = 10;
    let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

    let note_maximum = 20;
    let prenoms = ["Fidel", "Tevaitea", "Johan", "Noah", "Inès", "Adam", "Sofia", "Hugo", "Léa", "Yanis"];
    let notes = [];

    for (let i = 0; i < taille; i++) {
        let indice_random = Math.floor(Math.random() * prenoms.length);

        notes.push({
            prenom: prenoms[indice_random],
            noteMath: Math.floor(Math.random() * (note_maximum + 1)),
            noteFrancais: Math.floor(Math.random() * (note_maximum + 1)),
            noteHistoire: Math.floor(Math.random() * (note_maximum + 1))
        });
    }

    for (let i = 0; i < notes.length; i++) {
        notes[i].moyenne =
            (notes[i].noteMath + notes[i].noteFrancais + notes[i].noteHistoire) / 3;
    }

    return notes;
}

function afficherEleves(eleves) {
    for (let i = 0; i < eleves.length; i++) {
        console.log(eleves[i].prenom + " - " + eleves[i].moyenne.toFixed(2));
    }
}

function trouverMoyenneMin(eleves, indexDepart) {
    let min = eleves[indexDepart].moyenne;
    let indice_min = indexDepart;

    for (let i = indexDepart + 1; i < eleves.length; i++) {
        if (eleves[i].moyenne < min) {
            min = eleves[i].moyenne;
            indice_min = i;
        }
    }

    return indice_min;
}

function afficherDonnees(eleves) {
    let indiceMin = trouverMoyenneMin(eleves, 0);

    let min = eleves[indiceMin].moyenne;
    let max = eleves[0].moyenne;

    for (let i = 1; i < eleves.length; i++) {
        if (eleves[i].moyenne > max) {
            max = eleves[i].moyenne;
        }
    }

    console.log("Nombre total d'élèves: " + eleves.length);
    console.log("Moyenne la plus basse: " + min.toFixed(2));
    console.log("Moyenne la plus haute: " + max.toFixed(2));
}

function swap(eleves, indexA, indexB) {
    let temp = eleves[indexA];
    eleves[indexA] = eleves[indexB];
    eleves[indexB] = temp;
}

function triParSelection(eleves) {
    for (let i = 0; i < eleves.length - 1; i++) {
        let indiceMin = trouverMoyenneMin(eleves, i);
        if (indiceMin !== i) {
            swap(eleves, i, indiceMin);
        }
    }
}

let eleves = genererEleves();

console.log("Liste des élèves :");
afficherEleves(eleves);

console.log("\nDonnées globales :");
afficherDonnees(eleves);

triParSelection(eleves);

console.log("\nListe triée :");
afficherEleves(eleves);
