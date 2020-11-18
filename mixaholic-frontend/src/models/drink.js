class Drink {

    static all = []

    constructor(data){
        this.name = data.name;
        this.description = data.description;
        this.rating = data.rating;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        // this.reviews = data.reviews;
        this.ingredients = data.ingredients;
        this.id = data.id;
        Drink.all.push(this);

    }

    html() {
        return `<div class="drink-item" data-id="${this.id}">
        <h4>${this.name}</h4>
        <h6>rating: ${this.rating}</h6>
        <p>${this.description}</p>
        <button>See More Info</button>
        </div>`;
    }

    renderShowHTML(){
        return `<ul>
            ${this.ingredients.map(ing => {
            `<li>${ing.description}</li>`}).join(" ")}
            </ul>`
    }
}