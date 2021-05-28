class CreateExhibits < ActiveRecord::Migration[6.1]
  def change
    create_table :exhibits do |t|
      t.string :name
      t.belongs_to :zoo, null: false, foreign_key: true

      t.timestamps
    end
  end
end
