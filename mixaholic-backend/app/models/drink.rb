class Drink < ApplicationRecord
    has_many :ingredients, dependent: :destroy
    has_many :reviews, dependent: :destroy
    accepts_nested_attributes_for :ingredients, :allow_destroy => true, reject_if: proc {|ing| ing['description'].blank?}
end

