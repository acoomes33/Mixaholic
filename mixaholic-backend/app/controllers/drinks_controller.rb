class DrinksController < ApplicationController

    def index
        drinks = Drink.all
        render json: DrinkSerializer.new(drinks).to_serialized_json
    end 

    def show 
        drink = Drink.find_by(id: params[:id])
        render json: DrinkSerializer.new(drink).to_serialized_json
    end 

end
