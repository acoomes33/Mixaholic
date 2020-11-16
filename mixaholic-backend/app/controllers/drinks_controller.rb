class DrinksController < ApplicationController

    def index
        drinks = Drink.all
        DrinkSerializer.new(drinks).to_serialized_json
    end 

    def show 
        drink = Drink.find_by(params[:id])
        DrinkSerializer.new(drink).to_serialized_json
    end 

end
