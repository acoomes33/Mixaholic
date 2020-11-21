class AddLikeCountToDrinks < ActiveRecord::Migration[6.0]
  def change
    add_column :drinks, :like_count, :integer
  end
end
