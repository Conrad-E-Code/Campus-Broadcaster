class CreatePiclikes < ActiveRecord::Migration[6.1]
  def change
    create_table :piclikes do |t|
      t.integer :user_id
      t.integer :image_id
    end
  end
end
