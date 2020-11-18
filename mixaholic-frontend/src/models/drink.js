class Drink {

    static all = []

    constructor(data){
        this.name = data.name;
        this.description = data.description;
        this.rating = data.rating;
        this.created_at = data.created_at;
        this.updated_at = data.updated_at;
        this.image_url = data.image_url;
        // this.reviews = data.reviews;
        this.ingredients_attributes = data.ingredients_attributes;
        this.id = data.id;
        Drink.all.push(this);

    }

    html() {
        return `<div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100">
          <img class="card-img-top" src="http://placehold.it/500x325" alt="">
          <div class="card-body">
            <h4 class="card-name">${this.name}</h4>
            <p class="card-text">Description: ${this.description}</p>
          </div>
          <div class="card-footer" data-id="${this.id}">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">More Info</button>
                </div>
          </div>
        </div>
      </div>`;
    }

    renderShowHTML(){
        return `<h4>Ingredients: </h4>
        <ul> ${this.ingredients_attributes.map(ing => `<li>${ing.description}</li>`).join(" ")}
            </ul>`
    }
}
