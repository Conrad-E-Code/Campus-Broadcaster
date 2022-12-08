class ImageController < ApplicationController

post "/pictures/new" do
    client_id = params[:user_id]
    num = client_id.to_i
    newPicture = Image.create image_url:params[:image_url], user_id:num
    newPicture.to_json
end

get "/pictures" do
    campus_pics = Image.all
    campus_pics.to_json
end

end