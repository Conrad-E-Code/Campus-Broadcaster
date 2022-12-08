class NewUserController < Sinatra::Base
    post "/users" do 
        newUser = User.create params 
        newUser.to_json
    end
end