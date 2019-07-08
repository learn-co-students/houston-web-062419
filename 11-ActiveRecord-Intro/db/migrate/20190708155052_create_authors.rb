class CreateAuthors < ActiveRecord::Migration[5.2]
  def change

    create_table :authors do |t|
      # binding.pry
      t.string :name

    end
  end
end
