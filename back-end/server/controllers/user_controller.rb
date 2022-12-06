class UserController < ApplicationController
    # use Rack::Cors do
    # allow do 
    #     origins '*'
    #     resource '*'
    # end

    get '/users' do
        orgainzations = Organization.all
        organizations.to_json
    end

    get "/organizations/:id" do 
        org = Organization.find(params[:id])
        org.tojson
    end

    post '/organizations' do
    end

    patch '/organizations/:id' do
        org = Organization.find(params[:id])
        org.update(name: params[:name])
        or
        org.update(params)
        org.to_json

        
    end

    delete '/organizations/:id'
    org = Organization.find(params[:id])
    org.destroy
    nd
end

run ApplicationConroller
use UserController