class School<ActiveRecord::Base
    has_many :users
    has_many :broadcasts, through: :users

    def page_cast
        arr = self.broadcasts.map do |b|
            b.to_page
        end

    end
end
    