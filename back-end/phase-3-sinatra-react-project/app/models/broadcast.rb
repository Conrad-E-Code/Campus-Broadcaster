class Broadcast<ActiveRecord::Base
    belongs_to :user 

    def to_page
        "#{self.user.username}
        Says: #{self.content}
        #{self.created_at}"

    end

    
end
    