class DrinksController < ApplicationController
    def index
        drinks = Drink.all
        render json: drinks
    end 

    def show 
        drink = Drink.find_by(params[:id])
        render json: drink
    end 

    def create

    end 
end
