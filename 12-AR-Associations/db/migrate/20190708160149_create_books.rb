class CreateBooks < ActiveRecord::Migration[5.2]
  def change

    create_table :books do |t|
      t.string :title
      t.integer :year
      t.integer :author_id
      
    end
  end
end
