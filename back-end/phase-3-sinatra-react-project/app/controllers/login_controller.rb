class LoginController < ApplicationController
    
    # Add your routes here
    post "/login" do
        password_input = params[:password]
        user_input = params[:username]
        if (password_input == "1234" && user_input =="Phil")
                true.to_json 
        else
            msg = false
            msg.to_json
        end
    end
end