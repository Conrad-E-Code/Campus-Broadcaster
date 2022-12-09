class AddLikesToBroadcasts < ActiveRecord::Migration[6.1]
  def change
    add_column :broadcasts, :likes, :integer
  end
end
