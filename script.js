import { drinkCollection } from "./collection.js";

drinkCollection.forEach((drink) => {
    console.log(drink);
    const button = document.createElement("button");
    button.innerHTML = drink.name;
    button.style.backgroundColor = drink.color;
    document.body.append(button);

console.log("horse");

    let cocktail = drink.cocktail;

    button.addEventListener("click", () => {
        if (drink === cocktail) {
            console.log("cocktail");
    
            
        }
    });

});