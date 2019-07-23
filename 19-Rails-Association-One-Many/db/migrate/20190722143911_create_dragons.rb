class CreateDragons < ActiveRecord::Migration[5.2]
  def change
    create_table :dragons do |t|
      t.string :name
      t.integer :age
      t.integer :owner_id

      t.timestamps
    end
  end
end
