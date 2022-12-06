class CreateLogins < ActiveRecord::Migration[6.1]
  def change
    create_table :logins do |t|
      t.string :password
      t.string :username
      t.integer :user_id
  end
end
