class Broadcast<ActiveRecord::Base
    belongs_to :user 

    def to_page
        # needed_stuff = {}
        # needed_stuff << ...self 
        #needed_stuff << self.user.username
        username = {username: self.user.username}
        a = self.attributes
        needed_info = a.merge(username)
        needed_info
        #needed_stuff = self.inject(username)
        #self.merge(username: "#{username}")
        #binding.pry
        # "#{self.user.username}
        # Says: #{self.content}
        # #{self.created_at}"

    end

    
end
    