class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all
        render json: ingredients
    end 

    def show 
        ingredient = Ingredient.find_by(id: params[:id])
        render json: ingredient
    end 

end
