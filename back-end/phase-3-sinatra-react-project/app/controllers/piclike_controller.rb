class PiclikeController < ApplicationController

    post "/piclikes" do
        #unless  there isn't a piclike that has the same image_id and user_id
        restricted = Piclike.find_by user_id: params[:user_id], image_id: params[:image_id]
        unless restricted != nil

    a = Piclike.create user_id:params[:user_id], image_id:params[:image_id]
    a.to_json
        else
            "ERROR YOU CANT LIKE A PIC MORE THAN ONCE".to_json
    end
end

    get "/piclikes" do
        mappl = Piclike.all.map do |plik|
        likerhash = {liker_user: "#{plik.user.username}"}
        send_it = plik.attributes.merge likerhash
        end
        mappl.to_json
    end
    #    # b = Piclike.where(user_id:params[:id])
    #    client_instance = User.find(params[:id])  # getting currently logged in user instance
    #    client_piclikes = client_instance.piclikes # getting asssoicated piclikes

    # #    like_atts = client_piclikes.map do |lik|
    # #    end
    #    #User.find_by()
    #    usermap = client_piclikes.map do |pl|
    #     pl.user
    #    end
    #    getnames = usermap.map do |id|
    #     myuser = User.find_by"id = ?", id
    #     myuser.username
    #    end
    #    getnames.to_json
       #client_instance.school.page_cast.reverse.to_json



end

#we want to send out an array of piclike objects with image_id and liker username.

# where do we get image id? : piclike.image_id
# username source: user.findby piklike.userid => user.username

# needs: liker username image_id

# send_it = {image_id: 4,
#             liker_user: "",
#             }

          #  multiple send its inside an array

