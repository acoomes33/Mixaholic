class DrinkSerializer

    def initialize(drink_obj)
        @drink = drink_obj
    end


    def to_serialized_json
        options = {
          include: {
            ingredients: {
              only: [:id, :description, :drink_id]
            },
            reviews: {
                only: [:id, :comment, :rating, :drink_id]
            }
           }
        }
        @drink.to_json(options)
      end

end 