class CreateBroadcasts < ActiveRecord::Migration[6.1]
  def change
    create_table :broadcasts do |t|
      t.string :content
      t.timestamps
      t.integer :user_id
    end
  end
end
