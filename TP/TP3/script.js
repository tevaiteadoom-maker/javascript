//////////////////////// Code fourni (ne pas modifier) ////////////////////////

// Définir la taille du tableau de notes aléatoirement entre 7 et 10 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;
// Math.random() génère un nombre entre 0 et 1
// On multiplie par (taille_maximum - taille_minimum + 1) pour obtenir une plage correcte
// On ajoute taille_minimum pour que la taille soit au moins taille_minimum

// Déclarer le tableau pour stocker les notes
let notes = [];

// Définir la note maximale (la note minimale sera 0 par défaut)
let note_maximum = 20;

// Tableau de prénoms possibles pour les élèves
let prenoms = ["Fidel", "Tevaitea", "Johan", "Noah", "Inès", "Adam", "Sofia", "Hugo", "Léa", "Yanis"]

// Génération des notes aléatoires pour chaque élève
for (let i = 0; i < taille; i++) {
    // Choisir un prénom aléatoire parmi le tableau
    let indice_random = Math.floor(Math.random() * prenoms.length);
    
    // Ajouter un objet représentant l'élève et ses notes
    notes.push({
        prenom: prenoms[indice_random],                 // Prénom de l'élève
        noteMath: Math.floor(Math.random() * (note_maximum + 1)), // Note de Mathématiques aléatoire entre 0 et 20
        noteFrancais: Math.floor(Math.random() * (note_maximum + 1)), // Note de Français aléatoire
        noteHistoire: Math.floor(Math.random() * (note_maximum + 1)), // Note d'Histoire aléatoire
    });
}

// Calcul de la moyenne pour chaque élève
for(let i = 0; i < notes.length; i++){
    let moyenne = (notes[i].noteMath + notes[i].noteFrancais + notes[i].noteHistoire) / 3;
    notes[i].moyenne = moyenne; // Ajout de la propriété 'moyenne' à chaque objet élève
}

// Affichage complet du tableau d'élèves avec toutes les notes et la moyenne
console.log(notes);

// Affichage synthétique du prénom et de la moyenne pour chaque élève
for(let i = 0; i < taille; i++){
    console.log(notes[i].prenom + " - " + notes[i].moyenne.toFixed(2));
}

///////////////////////////////////////////////////////////////////////////////
// Partie 1 – Étude des valeurs
// Objectif : trouver le minimum, le maximum et l’indice du minimum

// Initialisation du minimum et du maximum avec la première moyenne
let min = notes[0].moyenne;
let max = notes[0].moyenne;
let indice_min = 0;

// Parcours du tableau pour trouver le minimum, le maximum et l'indice du minimum
for (let i = 1; i < notes.length; i++) {
    if (notes[i].moyenne < min) {
        min = notes[i].moyenne;
        indice_min = i; // On enregistre l'indice de l'élève ayant la plus petite moyenne
    }
    if (notes[i].moyenne > max) {
        max = notes[i].moyenne;
    }
}

// Affichage des résultats de l'étude des valeurs
console.log("\nNombre total d'élèves: " + notes.length);
console.log("Moyenne la plus basse: " + min.toFixed(2));
console.log("Moyenne la plus haute: " + max.toFixed(2));
console.log("Indice de la plus petite moyenne: " + indice_min);
console.log("Élève avec la plus petite moyenne: " + notes[indice_min].prenom + " - " + notes[indice_min].moyenne.toFixed(2));

///////////////////////////////////////////////////////////////////////////////
// Partie 2 – Échange de valeurs
// Objectif : placer l'élève avec la plus petite moyenne au début du tableau

// Stock temporaire pour l'échange
let stock = notes[0];
notes[0] = notes[indice_min]; // Placer l'élève avec la plus petite moyenne à l'indice 0
notes[indice_min] = stock;    // Remettre l'élève initial de l'indice 0 à la place de l'indice_min

// Affichage du tableau après l'échange
console.log("\nTableau après échange du minimum avec le premier élément:");
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i].prenom + " - " + notes[i].moyenne.toFixed(2));
}

///////////////////////////////////////////////////////////////////////////////
// Partie 3 – Tri par sélection complet (moyenne croissante)
// Objectif : trier tous les élèves par moyenne de manière ascendante

let comparaisons = 0; // Compteur pour le nombre de comparaisons effectuées
let echanges = 0;     // Compteur pour le nombre d'échanges effectués

for (let i = 0; i < notes.length - 1; i++) {
    let minIndex = i; // On suppose que l'élément i est le minimum
    for (let j = i + 1; j < notes.length; j++) {
        comparaisons++;
        if (notes[j].moyenne < notes[minIndex].moyenne) {
            minIndex = j; // On trouve le véritable minimum dans le reste du tableau
        }
    }
    // Échange si le minimum trouvé n'est pas déjà à la position i
    if (minIndex != i) {
        let temp = notes[i];
        notes[i] = notes[minIndex];
        notes[minIndex] = temp;
        echanges++;
    }
}

// Affichage du tableau trié
console.log("\nTableau trié par moyenne croissante:");
for (let i = 0; i < notes.length; i++) {
    console.log(notes[i].prenom + " - " + notes[i].moyenne.toFixed(2));
}
console.log("Nombre de comparaisons: " + comparaisons);
console.log("Nombre d'échanges: " + echanges);

///////////////////////////////////////////////////////////////////////////////
// Bonus – Tri par matière (exemple : Maths)

// On copie le tableau pour ne pas modifier l'original
let notesMath = [];
for (let i = 0; i < notes.length; i++) {
    notesMath.push(notes[i]);
}

comparaisons = 0;
echanges = 0;

// Tri par sélection basé uniquement sur la note de Mathématiques
for (let i = 0; i < notesMath.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < notesMath.length; j++) {
        comparaisons++;
        if (notesMath[j].noteMath < notesMath[minIndex].noteMath) {
            minIndex = j;
        }
    }
    if (minIndex != i) {
        let temp = notesMath[i];
        notesMath[i] = notesMath[minIndex];
        notesMath[minIndex] = temp;
        echanges++;
    }
}

// Affichage du tableau trié par note de Maths
console.log("\nTableau trié par note de Maths:");
for (let i = 0; i < notesMath.length; i++) {
    console.log(notesMath[i].prenom + " - " + notesMath[i].noteMath);
}
console.log("Nombre de comparaisons: " + comparaisons);
console.log("Nombre d'échanges: " + echanges);
