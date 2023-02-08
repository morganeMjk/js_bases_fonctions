// Définition de la variable number
let number = Number(prompt("Saisissez un nombre entier compris entre 1 et 10"));

// Tant que number est inférieur à 1 ou supérieur à 10, la variable number affiche le message d'erreur
while ((number < 1) || (number > 10)) {
    number = Number(prompt("Le nombre saisi doit être compris entre 1 et 10."));
}

// Définition de la variable results
let results = [];

// Création d'une boucle for. Pour i = 1, tant que i est inférieur ou égale à 0, la boucle ajoute la valeur de result à results
for (i = 1 ; i <= 10 ; i++) {
    let result = (` ${number} x ${i} = ${i * number}`);
    results.push(`${result} `)
}

// Affichage de results en alerte
alert(results)

// Définition de la varable results2
let results2 = [];

// Création de la fonction myFunction qui prend un paramètre. Pour j = 1, tant que j est inférieur ou égale à 0, la boucle for ajoute la valeur de result2 à results2. La fonction retourne une alerte de results2.
function myFunction(a) {
    for (j = 1 ; j <= 10 ; j++){
        let result2 = (` ${number} x ${j} = ${j * number}`);
        results2.push(`${result2}`);
    }
    return alert(results2);
}

// Appel de la fonction myFunction avec number en paramètre
myFunction(number);