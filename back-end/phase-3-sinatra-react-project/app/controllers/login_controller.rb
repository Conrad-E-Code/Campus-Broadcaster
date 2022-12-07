class LoginController < ApplicationController
    
    # Add your routes here
    post "/login" do
        password_input = params[:password]
        user_input = params[:username]
        auth_user = User.find_by "username == ?", user_input
        client_id = auth_user.id
        if (password_input == auth_user.password && user_input == auth_user.username)
                {token: "#{client_id}"}.to_json 
        else
            msg = false
            msg.to_json
        end
        # Login.find_bylksjdafhlkashdflkjsahdf
        # condition logic on fetched login matching user-input login
    end
end