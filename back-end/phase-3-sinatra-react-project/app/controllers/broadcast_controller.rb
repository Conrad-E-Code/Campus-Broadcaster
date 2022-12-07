class BroadcastController < ApplicationController

    post "/broadcasts" do
        client_id = params[:user_id]
        num = client_id.to_i
        newBroadcast = Broadcast.create content:params[:content], user_id:num
        newBroadcast.to_json
    end
end