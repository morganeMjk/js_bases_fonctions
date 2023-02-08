// Définition de variable
let nom = "John";   // Définition de la variable 'nom' et attribution de la valeur 'John'
console.log(nom);   // Affichage de la valeur de la variable 'nom' - renvoie 'John'
nom = "Jane";       // Attribution de la valeur 'Jane' à la variable 'nom'
console.log(nom);   // Affichage de la valeur de la variable 'nom' - renvoie 'Jane'

// Boucles
for (let i = 1 ; i <= 10 ; i++) {     // Création d'une boucle for - Définition de i = 1 au début de la boucle - La boucle continue tant que i est inférieure ou égale à 10 - Incrémentation de i à chaque étape de la boucle
    console.log(i);                   // Affichage de la valeur de i à chaque étape de la boucle
}

// console.log()
console.log("Bonjour tout le monde!");  // Affichage de la chaine de caractère 'Bonjour tout le monde' - renvoie 'Bonjour tout le monde!'
console.log(3 + 4);                     // Affichage du résultat de 3+4 - renvoie '7'
console.log(nom);                       // Affichage de la valeur de la variable 'nom' - renvoie 'Jane'

// Concaténation de chaîne de caractères
let firstName = "John";                     // Définition de la variable 'firstName' et attribution de la valeur 'John'
let lastName = "Doe";                       // Définition de la variable 'lastName' et attribution de la valeur 'Doe'
let total = `${firstName} ${lastName}`;     // Définition de la variable 'total' et attribution de la valeur des variables 'firstName' et 'lastName'
console.log(total);                         // Affichage de la valeur de la variable 'total' - renvoie 'John Doe'

// Conditions
let age = 29;                           // Définition de la variable 'age' et attribution de la valeur '29'
if (age >= 18) {                        // Création de la condition 'si' qui vérifie si l'age est supérieure ou égale ) 18
    console.log("Vous êtes majeur");    // renvoie 'Vous êtes majeur' si la condition est vraie
}
else {                                  // renvoie 'Vous êtes mineur si la condition est fausse
    console.log("Vous êtes mineur");
}

// Création et parcours d'un tableau
let couleurs = ["rouge", "vert", "bleu", "jaune", "orange"];    // Création du tableau 'couleurs' et attribution des chaines de caracère 'rouge', 'vert', 'bleu', 'jaune', 'orange'
for (let i = 0 ; i < couleurs.length ; i++) {                   // Création d'une boucle for - Définition de i = 0 au début de la boucle - La boucle continue tant que i est inférieur à la longueur du tableau couleur - Incrémentation de i à chaque étape de la boucle
    console.log(couleurs[i]);                                   // Affichage de la couleur située à l'index i du tableau couleurs à chaque étape de la boucle
}

// Utilisation de Array.push() et Array.prototype()
let numbers = [1, 2, 3, 4, 5]           // Création du tableau 'numbers' et attribution des nombres de 1 à 5
numbers.push(6)                         // Ajout du nombre '6' en dernière position du tableau 'numbers'
numbers.pop()                           // Suppression du dernier élément du tableau 'numbers'
console.log(numbers)                    // Affichage des valeurs du tableau 'numbers' - renvoie '1, 2, 3, 4, 5'

// Fonctions
// 1
function myFunction1(number) {      // Création de la fonction 'myFunction1' qui ne prend qu'un seul paramètre 'a'
    if (number % 2 === 0) {         // renvoie 'true' si a%2 est égale à 0
        return true;                // renvoie 'false' si a%2 est différent de 0
    }
    return false;                   // défini le retour que la fonction doit avoir
}

console.log(myFunction1(6))         // Affiche le return de la fonction 'myFunction1'

// 2
function myFunction2(a) {                       // Création de la fonction 'myFunction2' qui ne prend qu'un seul paramètre 'a'
    let result = 0;                             // La fonction défini la variable 'result' qui est égale à 0
    for (let i = 0 ; i < a.length ; i++) {      // La fonction créée une boucle for où i = 0 au début de la boucle - La boucle continue tant que i est inférieure à la longueur de 'a' - Incrémentation de i à chaque étape de la boucle
        result += a[i];                         // à chaque étape de la boucle la valeur de 'a' en position 'i' est ajoutée à 'result'
    }
    return result                               // défini le retour que la fonction doit avoir
}

console.log(myFunction2([1, 2, 3, 4]))          // Affiche le return de la fonction 'myFunction2'

// 3
function myFunction3(a) {               // Création de la fonction 'myFunction3' qui ne prend qu'un seul paramètre 'a'
    let split = a.split("");            // Divise les caracères de 'a' en valeur stockées dans un tableau 'split'
    let reverse = split.reverse();      // inverse les valeurs de 'split' et les stocks dans un variable 'reverse'
    let result = reverse.join("");      // regroupe les valeurs de 'reverse' en une chaine de caractère
    return result;                      // défini le retour que la fonction doit avoir
}

console.log(myFunction3("Bonjour"))     // Affiche le return de 'myFunction3'