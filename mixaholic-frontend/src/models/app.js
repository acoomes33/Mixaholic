class App {
    constructor() {
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
            Drink.all = data.map(drink => {
                return new Drink(drink);
            });
            
        });
    }

    renderDrinks() {
        const drinksDiv = document.getElementById("drinks-list");
        drinksDiv.innerHTML = "";
        Drink.all.forEach(
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
            ingredients: ing_attr
        });
       
        this.drinkAdapter.post(drink).then(d => {
            drink.id = d.id;
            this.addDrink(drink);
            drinkForm.reset();
        });
    }

    addDrink(drink) {
        this.renderDrinks();
    }

    handleClick = (e) => {
        if (e.target.className === "btn btn-sm btn-outline-secondary"){
            
            if (e.target.innerHTML === "More Info"){
                const ingDiv = e.target.parentElement.parentElement;
                const ingId = Number(ingDiv.dataset.id);
                const curDrink = Drink.all.find(d => d.id === ingId);
                e.target.innerHTML = "Less Info"
                ingDiv.innerHTML += curDrink.renderShowHTML();
            }
            else if(e.target.innerHTML === "Less Info"){
                const ingDiv = e.target.parentElement.parentElement;
                ingDiv.innerHTML = `<div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">More Info</button>
                </div>`
            }   
        }
        else if (e.target.innerHTML == "Delete Drink") {
            
            const id = Number(e.target.dataset.id)
            this.drinkAdapter.delete(id).then(()  => {
                Drink.all = Drink.all.filter(d => {
                    return d.id != id;
                });
                this.renderDrinks();
            })
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