class CreateAnimals < ActiveRecord::Migration[6.1]
  def change
    create_table :animals do |t|
      t.string :species
      t.string :sex
      t.integer :age
      t.belongs_to :exhibit, null: false, foreign_key: true

      t.timestamps
    end
  end
end
