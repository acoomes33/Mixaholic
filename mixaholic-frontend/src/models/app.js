class App {
    constructor() {
        this.drinks = [];
        this.drinkAdapter = new Adapter("drinks");
        this.getDrinks();
    }

    getDrinks(){
        this.drinkAdapter.getIndexFetch().then(data => {
            data.map(drink => {
                return new Drink(drink);
            })
        })
    }
}