class BroadcastController < ApplicationController

    post "/broadcasts" do
        client_id = params[:user_id]
        num = client_id.to_i
        newBroadcast = Broadcast.create content:params[:content], user_id:num
        newBroadcast.to_json
    end

    post "/test" do
        client_id = params[:token]
        send_it = Broadcast.find_by "user_id =?", client_id
        send_it.to_json
    end

    get "/test/:id" do
        client_instance = User.find(params[:id])
        client_instance.school.page_cast.to_json
    end

end
