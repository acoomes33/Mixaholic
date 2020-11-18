class AddImageUrlToDrink < ActiveRecord::Migration[6.0]
  def change
    add_column :drinks, :image_url, :string
  end
end
