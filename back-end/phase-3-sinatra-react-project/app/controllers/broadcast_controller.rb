class BroadcastController < ApplicationController
    post "/broadcasts" do
        client_id = params[:user_id]
        num = client_id.to_i
        newBroadcast = Broadcast.create content:params[:content], user_id:num, likes:params[:likes]
        newBroadcast.to_json
    end
    # post "/test" do
    #     client_id = params[:token]
    #     send_it = Broadcast.find_by "user_id =?", client_id    <--- THIS WAS BAD
    #     send_it.to_json
    # end
    get "/broadcasts/:id" do
        client_instance = User.find(params[:id])
        client_instance.school.page_cast.reverse.to_json
    end

    delete '/broadcasts/:id' do 
        broadcast = Broadcast.find_by("id=?", params[:id])
        broadcast.destroy
        "You're gone!"
      end 

    patch "/broadcasts/:id" do
        broadcast = Broadcast.find_by("id=?", params[:id])
        broadcast.update likes: params[:likes]
        broadcast.to_json
    end
end
