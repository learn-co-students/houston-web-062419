class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.integer :movie_id
      t.integer :actor_id
      t.string :name
    end
  end
end
