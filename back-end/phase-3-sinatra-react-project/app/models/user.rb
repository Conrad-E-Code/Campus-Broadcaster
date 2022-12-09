class User<ActiveRecord::Base
    belongs_to :school
    has_many :broadcasts
    has_many :images
    has_many :piclikes, through: :school
   
    

    def get_post
        client_broadcasts = self.school.broadcasts
        
    end

    # def get_likes
    #     client_likes = self.school.images
    #     b = client_likes.each.piclikes
    #     b
    # end

end
