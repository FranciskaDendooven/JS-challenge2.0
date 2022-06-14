import { drinkCollection } from "./collection.js";

drinkCollection.forEach((drink) => {
    console.log(drink);
    const button = document.createElement("button");
    button.innerHTML = drink.name;
    button.style.backgroundColor = drink.color;
    document.body.append(button);

});