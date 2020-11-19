class Drink < ApplicationRecord
    has_many :ingredients
    has_many :reviews
    accepts_nested_attributes_for :ingredients, :allow_destroy => true, reject_if: proc {|ing| ing['description'].blank?}
end

