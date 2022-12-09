class PiclikeController < ApplicationController

    post "/piclikes" do
    a = Piclike.create user_id:params[:user_id], image_id:params[:image_id]
    a.to_json
    end

    get "/piclikes/:id" do
       # b = Piclike.where(user_id:params[:id])
       client_instance = User.find(params[:id])
       b = client_instance.piclikes
       #User.find_by()
       testmap = b.map do |pl|
        pl.user_id
       end
       nextstep = testmap.map do |id|
        myuser = User.find_by"id = ?", id
        myuser.username
       end
       nextstep.to_json
       #client_instance.school.page_cast.reverse.to_json
    end



end