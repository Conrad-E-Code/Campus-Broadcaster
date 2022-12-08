class PiclikeController < ApplicationController

    post "/piclikes" do
    a = Piclike.create user_id:params[:user_id], image_id:params[:image_id]
    a.to_json
    end
end