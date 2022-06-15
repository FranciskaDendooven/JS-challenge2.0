import { drinkCollection, hotDrinkInstructions } from "./collection.js";

drinkCollection.forEach((drink) => {
    console.log(drink);
    const button = document.createElement("button");
    const div = document.createElement("div");
    button.innerHTML = drink.name;
    button.style.backgroundColor = drink.color;
    document.body.append(button);
    button.append(div);

    button.addEventListener("click", () => {
        if (drink.Type === "cocktail") {
            console.log("cocktail");
        } else {console.log("not a cocktail");}

        if(drink.Type === "soft drink"){
            div.innerText = "Just pour the drink, and you're ready to go!";
        }

        if(drink.Type === "hot drink") {
            button.innerHTML = hotDrinkInstructions;
        }

        fetch ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink.name)
        .then((response) => response.json())
        .then((data) => {
        console.log(data.drinks);})
        .catch(error => console.warn(error));
    });

});