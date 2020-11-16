class Drink < ApplicationRecord
    has_many :ingredients
    has_many :reviews
end
