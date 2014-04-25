class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :title, null: false
      t.text :description
      t.integer :rank, null: false
      t.integer :list_id
      
      t.timestamps
    end
  end
end
