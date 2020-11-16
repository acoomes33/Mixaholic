class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :description
      t.belongs_to :drink, null: false, foreign_key: true
    end
  end
end
