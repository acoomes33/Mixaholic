class DrinksController < ApplicationController

    def index
        drinks = Drink.all
        render json: DrinkSerializer.new(drinks).to_serialized_json
    end 

    def show 
        drink = Drink.find_by(id: params[:id])
        render json: DrinkSerializer.new(drink).to_serialized_json
    end 

    def create
        @drink = Drink.new(drink_params)
    
        if @drink.save
          render json: DrinkSerializer.new(@drink).to_serialized_json
        else
          render json: @drink.errors, status: :unprocessable_entity
        end
    end

    def destroy
        set_drink 
        @drink.destroy
        render json: 

    end 

    private

    def set_drink
      @drink = Drink.find_by(id: params[:id])
    end

    def drink_params
      params.require(:drink).permit(
          :name, 
          :description, 
          :image_url, 
          ingredients_attributes:[:id, :description])
    end

end
