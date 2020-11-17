class Drink {
    constructor(data){
        this.name = data.name;
        this.description = data.description;
        this.rating = data.rating;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        // this.ingredients = data.ingredients;
        // this.reviews = data.reviews;

    }

    html() {
        return `<div class="drink">
        <h4>${this.name}</h4>
        <h6>rating: ${this.rating}</h6>
        <p>${this.description}</p>
        </div>`;
    }
}