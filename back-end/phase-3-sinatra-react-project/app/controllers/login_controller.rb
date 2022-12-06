class LoginController < ApplicationController
    
    # Add your routes here
    post "/login" do
        password_input = params[:password]
        user_input = params[:username]
        auth_user = User.find_by "username == ?", user_input
        if (password_input == auth_user.password && user_input == auth_user.username)
                {token: "test123"}.to_json 
        else
            msg = false
            msg.to_json
        end

        # Login.find_bylksjdafhlkashdflkjsahdf
        # condition logic on fetched login matching user-input login
    end
end