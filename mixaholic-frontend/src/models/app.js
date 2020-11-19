class App {
    constructor() {
        this.drinks = [];
        this.drinkAdapter = new Adapter("drinks");
        this.getDrinks().then(() => {
            this.renderDrinks();
        });
        drinkForm.addEventListener("submit", this.newDrink);
        document.body.addEventListener("click", this.handleClick);
        ingButton.addEventListener("click", this.addInput);
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
        const ing_attr = [];
        document.querySelectorAll(".form-ingredients").forEach( ing => {
            ing_attr.push({description: ing.value})
        })
        const drink = new Drink({
    
            name: form.name.value,
            description: form.description.value,
            image_url: form.image_url.value,
            ingredients_attributes: ing_attr
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

    addInput(){
        let counter = 1;
        const newdiv = document.createElement('div');
        newdiv.innerHTML = ` <input type="text" class="form-ingredients" id="drink_ingredients_attributes_${counter}_description" name="drink[ingredients_attributes][${counter}][description]">`
        ingDiv.appendChild(newdiv);
        counter++;
    }

}