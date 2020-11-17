class App {
    constructor() {
        this.drinks = [];
        this.drinkAdapter = new Adapter("drinks");
        this.getDrinks().then(() => {
            this.renderDrinks();
        });
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

    newDrink(e){
        e.preventDefault();
        const form = e.target;
        
        const drink = new Drink({});
        this.drinkAdapter.drink();
    }
}