class User<ActiveRecord::Base
    has_many :broadcasts
    belongs_to :school

    def get_post
        client_broadcasts = self.school.broadcasts
        
    end
end
