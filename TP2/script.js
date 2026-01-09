//////////////////////// Code fourni (ne pas moidifier) ////////////////////////

// Définir la taille du tableau de notes au hasard entre 15 et 30 éléments
let taille_minimum = 7;
let taille_maximum = 10;
let taille = Math.floor(Math.random() * (taille_maximum - taille_minimum + 1)) + taille_minimum;

// Déclarer le tableau pour stocker les notes
let notes = [];
// Définir la note maximale (pas besoin de définir la note minimale car elle est 0 par défaut)
let note_maximum = 20;

// Itérer autant de fois qu'on a de notes aléatoires à générer
for (let i = 0; i < taille; i++) {
    // Générer une note aléatoire entre 0 et note_maximum (inclus)
    let note = Math.floor(Math.random() * (note_maximum + 1));
    // Ajouter la note générée au tableau
    notes.push(note);
}

///////////////////////////////////////////////////////////////////////////////

// Partie 1 – Étude des valeurs
// Objectif : trouver le minimum, le maximum et l’indice du minimum

// Initialisation du minimum avec la première valeur du tableau
min = notes[0];

// Initialisation du maximum avec la première valeur du tableau
max = notes[0];

// Initialisation de l’indice du minimum
indice_min = 0;

// Parcours du tableau notes
for(let i = 0; i < notes.length; i++){
    
    // Si la valeur courante est supérieure au maximum actuel
    if(notes[i] > max){
        // Mise à jour du maximum
        max = notes[i]
    }
    
    // Si la valeur courante est inférieure au minimum actuel
    if(notes[i] < min){
        // Mise à jour du minimum
        min = notes[i]
        // Sauvegarde de l’indice du nouveau minimum
        indice_min = i
    } 
}

// Affichage de la liste
console.log("la liste: " + notes);

//stockage de la liste
stockage_notes = []
for(i = 0; i < notes.length; i++){
    stockage_notes.push(notes[i]);
}

// Affichage de la taille du tableau
console.log("taille de la liste: " + notes.length);

// Affichage de la valeur maximale
console.log("le max de la listes: " + max);

// Affichage de la valeur minimale
console.log("le min de la listes: " + min);

// Partie 2 – Première étape du tri
// Affichage de l’indice du minimum

console.log("l'indice du min de la listes: " + indice_min);

// Partie 3 – Échange de valeurs
// Code commenté : échange du premier élément avec le minimum

/*
stock = notes[0];
notes[0] = notes[indice_min];
notes[indice_min] = stock;
*/

// Partie 4 – Tri par sélection complet
// Tri du tableau dans l’ordre croissant

// Variable temporaire pour l’échange
stockage = 0;

// Compteur d’étapes (non utilisé)
etape = 0;

// Compteur du nombre d’échanges
echange = 0;

// Compteur du nombre de comparaisons
verification = 0;

// Boucle principale du tri
for(let i = 0; i < notes.length; i++){
    
    // Comparaison avec les éléments suivants
    for(let j = i + 1; j < notes.length; j++){
        
        // Si un élément plus petit est trouvé
        if(notes[j] < notes[i]){
            
            // Échange des valeurs
            stockage = notes[i];
            notes[i] = notes[j];
            notes[j] = stockage;
            
            // Incrémentation du nombre d’échanges
            echange += 1;
            
            // Affichage de la liste après chaque échange
            console.log("voici la liste a l'etape " + echange + ", voici la liste: " + notes);
        }
        
        // Incrémentation du nombre de comparaisons
        verification += 1;
    }
}

// Affichage des résultats du tri croissant
console.log("nombre d'echange: " + echange);
console.log("nombre de verification: " + verification);
console.log("la liste trié dans l'ordre croissant: " + notes);
console.log("la liste avant : " + stockage_notes);

// Bonus – Tri décroissant
// Tri du tableau dans l’ordre décroissant

// Variable temporaire pour l’échange
stockage_d = 0;

// Compteur d’étapes (non utilisé)
etape_d = 0;

// Compteur du nombre d’échanges
echange_d = 0;

// Compteur du nombre de comparaisons
verification_d = 0;

// Boucle principale du tri décroissant
for(let i = 0; i < notes.length; i++){
    
    for(let j = i + 1; j < notes.length; j++){
        
        // Si un élément plus grand est trouvé
        if(notes[j] > notes[i]){
            
            // Échange des valeurs
            stockage_d = notes[i];
            notes[i] = notes[j];
            notes[j] = stockage_d;
            
            // Incrémentation du nombre d’échanges
            echange_d += 1;
            
            // Affichage de la liste après chaque échange
            console.log("voici la liste a l'etape " + echange_d + ", voici la liste: " + notes);
        }
        
        // Incrémentation du nombre de comparaisons
        verification_d += 1;
    }
}

// Affichage des résultats du tri décroissant
console.log("nombre d'echange: " + echange_d);
console.log("nombre de verification: " + verification_d);
console.log("la liste trié dans l'ordre decroissant: " + notes);
