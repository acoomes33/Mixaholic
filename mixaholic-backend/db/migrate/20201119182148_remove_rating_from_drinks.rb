class RemoveRatingFromDrinks < ActiveRecord::Migration[6.0]
  def change
    remove_column :drinks, :rating, :string
  end
end
