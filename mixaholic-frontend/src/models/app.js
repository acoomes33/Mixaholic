class App {
    constructor() {
        this.drinks = [];
        this.drinkAdapter = new Adapter("drinks");
        this.getDrinks().then(() => {
            this.renderDrinks();
        });
        drinkForm.addEventListener("submit", this.newDrink);
    }

    getDrinks(){
        return this.drinkAdapter.getIndex().then(data => {
            this.drinks = data.map(drink => {
                return new Drink(drink);
            });
        });
    }

    renderDrinks() {
        const drinksDiv = document.getElementById("drinks-list");
        
        drinksDiv.innerHTML = "";
        this.drinks.forEach(
            drink => {
                drinksDiv.innerHTML += drink.html();
                
            }
        );
    }

    newDrink = (e) => {
        e.preventDefault();
        const form = e.target;

        const drink = new Drink({
            name: form.name.value,
            description: form.description.value
        });
        this.drinkAdapter.post(drink).then(d => {
            drink.id = d.id;
            this.addDrink(drink);
            drinkForm.reset();
        });
    }

    addDrink(drink) {
        this.drinks.push(drink);
        this.renderDrinks();
    }
}