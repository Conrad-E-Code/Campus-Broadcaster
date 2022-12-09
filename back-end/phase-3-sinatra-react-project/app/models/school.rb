class School<ActiveRecord::Base
    has_many :users
    has_many :broadcasts, through: :users
    has_many :images, through: :users
    has_many :piclikes, through: :images

    def page_cast
        arr = self.broadcasts.map do |b|
            b.to_page
        end

    end
end
    