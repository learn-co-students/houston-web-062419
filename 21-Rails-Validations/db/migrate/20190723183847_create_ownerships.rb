class CreateOwnerships < ActiveRecord::Migration[5.2]
  def change
    create_table :ownerships do |t|
      t.integer :owner_id
      t.integer :dragon_id

      t.timestamps
    end
  end
end
