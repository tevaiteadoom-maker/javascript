// Partie 1 : Informations générales

// Nom de la classe
const classe = "CodaB1A";

// Nombre total d'étudiants dans la classe
let nb_student = 28;

// Indique si la classe est ouverte (true = oui, false = non)
let openclass = true;

// Affiche le nom de la classe
console.log("nom de la classe " + classe);

// Affiche le nombre d'étudiants
console.log("Nombre d'etudiant " + nb_student);

// Affiche si la classe est ouverte
console.log("si la classe est ouvert " + openclass);


// Partie 2 – Représenter un élève

// Objet représentant un élève avec son nom et ses notes
let student1 = {
   name : "Tevaitea",
   note_maths : 20,
   note_français : 8 
};

// Affiche l'objet élève
console.log("caractetistique de l'eleve " + student1);

// Affiche le nom de l'élève
console.log("Nom de l eleve " + student1.name);

// Affiche la note de maths
console.log("note de maths: " + student1.note_maths);

// Affiche la note de français
console.log("note de français " + student1.note_français);


// Partie 3 – Gérer plusieurs élèves

// Deuxième élève
let student2 = {
   name : "johan",
   note_maths : 5 ,
   note_français : 15 
};

// Troisième élève
let student3 = {
   name : "Fidel",
   note_maths : 0,
   note_français : 0 
};

// Tableau contenant tous les élèves
let deleves = [student1,student2,student3];

// Parcours du tableau pour afficher le nom de chaque élève
for(let i = 0 ; i < deleves.length ; i++){
    console.log("Nom de l eleve " + deleves[i].name);
}


// Partie 5 – Résultat de l’élève + Partie 4 – Gérer plusieurs élèves + Partie 6 – Mention

// Variable pour stocker la moyenne d'un élève
let moyenne = 0;

// Tableau pour stocker les moyennes (non utilisé ici)
let moyenne_des_eleves = [];

// Variable pour calculer la moyenne générale de la classe
let moyenne_de_la_classe = 0;

// Boucle sur tous les élèves
for(let i = 0 ; i < deleves.length ; i++){

    // Calcul de la moyenne de l'élève
    moyenne = (deleves[i].note_français + deleves[i].note_maths) / 2;

    // Ajout de la moyenne dans l'objet élève
    deleves[i].moyenne = moyenne;

    // Addition des moyennes pour la classe
    moyenne_de_la_classe += moyenne;

    // Affiche le nom de l'élève
    console.log("Nom de l eleve " + deleves[i].name);

    // Affiche la moyenne de l'élève
    console.log("moyenne de l eleve " + moyenne);

    // Vérifie si l'élève est admis
    if (moyenne >= 10 ){
        console.log("l eleve est admis ");
    }
    else{
        console.log("l eleve est refusé ");
    }

    // Attribution de la mention
    if(moyenne >= 16){
        console.log("Tres bien");
    }
    else if(moyenne >= 14){
        console.log("Bien");
    }
    else if(moyenne >= 12){
        console.log("Assez bien");
    }
    else if(moyenne >= 10){
        console.log("Passable");
    }
    else {
        console.log("Insuffisant");
    }
}
// Calculer la moyenne de la classe et l’afficher.
// Calcul de la moyenne de la classe
moyenne_de_la_classe = moyenne_de_la_classe / deleves.length;

// Affiche la moyenne de la classe
console.log(moyenne_de_la_classe);


// Partie 7 – Statistiques de la classe

// Index pour la boucle while
let i = 0;

// Compteur d'élèves admis
let compteur = 0;

// Parcours des élèves avec une boucle while
while (i < deleves.length){

    // Vérifie si l'élève est admis
    if (deleves[i].moyenne >= 10 ){
        compteur += 1;
    }

    // Passage à l'élève suivant
    i ++
}

// Affiche le nombre d'élèves admis
console.log(compteur)

//Bonus - Afficher un message de félicitations si tous les élèves sont admis.
// Vérifie si tous les élèves sont admis
if (compteur = deleves.length){
    console.log("felicitation")
}
// Bonus – Ajouter un nouvel élève à la classe

// Création d'un nouvel élève
let student4 = {
    name : "Lucas",
    note_maths : 13,
    note_français : 11
};

// Ajout du nouvel élève dans le tableau des élèves
deleves.push(student4);

// Affiche le nouveau nombre d'élèves dans la classe
console.log("Nouveau nombre d eleves : " + deleves.length);








