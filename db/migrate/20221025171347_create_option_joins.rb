class CreateOptionJoins < ActiveRecord::Migration[7.0]
  def change
    create_table :option_joins do |t|
      t.references :option, null: false, foreign_key: true
      t.references :destination, null: false, foreign_key: true

      t.timestamps
    end
  end
end
