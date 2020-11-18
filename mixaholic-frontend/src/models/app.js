class App {
    constructor() {
        this.drinks = [];
        this.drinkAdapter = new Adapter("drinks");
        this.getDrinks().then(() => {
            this.renderDrinks();
        });
        drinkForm.addEventListener("submit", this.newDrink);
        document.body.addEventListener("click", this.handleClick);
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
        debugger;
        const drink = new Drink({
            name: form.name.value,
            description: form.description.value,
            image_url: form.image_url.value,
            ingredients_attributes
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

    handleClick = (e) => {
        if (e.target.className === "btn btn-sm btn-outline-secondary"){
            const ingDiv = e.target.parentElement.parentElement;
            const id = Number(ingDiv.dataset.id);
            const curDrink = Drink.all.find(d => d.id === id)
            
            if (e.target.innerHTML === "More Info"){
                // debugger;
                e.target.innerHTML = "Less Info"
                ingDiv.innerHTML += curDrink.renderShowHTML();
            }
            else if(e.target.innerHTML === "Less Info"){
                ingDiv.innerHTML = `<div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">More Info</button>
                </div>`
            }
            
        }
    }

}