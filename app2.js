// Enoncé 1

// Définition des variable number et names
let number = prompt("Saisissez un nombre de nom");
let names = [];

// Boucle for, définition de i=1, tant que i est inférieur ou égale à number affichage d'un prompt et en enregistrement de la valeur saisie dans names
for (let i = 1 ; i <= number ; i++) {
    names.push(prompt(`Saisissez le ${i}e nom`));
}

// Affichage de la liste names
console.log(names)


// Si la longueur de length est supérieur à 3, affichage d'une alert et affichage du message dans la console
// Sinon le message d'alerte et celui de la console sont différents
if (names.length > 3) {
    alert(`Vous avez enregistrez les ${names.length} noms suivants : ${names}. C'est beaucoup de noms`);
    console.log(`Vous avez enregistrez les ${names.length} noms suivants : ${names}. C'est beaucoup de noms`);
}
else {
    alert(`Vous avez enregistrez les ${names.length} noms suivants : ${names}.`);
    console.log(`Vous avez enregistrez les ${names.length} noms suivants : ${names}.`);
}


// Création d'une fonction qui prend a en paramètre
// Pour chaque élément de a, affichage de l'élément dans la console
function myFunction (a) {
    for (let name in a) {
        console.log(name);
    }
}

// Appel de la fonction avec names en paramètre
myFunction(names);