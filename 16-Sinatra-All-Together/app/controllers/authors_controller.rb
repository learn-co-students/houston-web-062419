class AuthorsController < ApplicationController

    get '/authors' do
        @authors = Author.all 
        erb :'authors/index'
    end

    get '/authors/new' do
        erb :'authors/new'
    end

    get '/authors/:id' do 
        @author = Author.find(params[:id])
        erb :'authors/show'
    end

    post '/authors' do
        # binding.pry
        author = Author.create(params)
        redirect "/authors/#{author.id}"
    end

    get '/authors/:id/edit' do
        @author = Author.find(params[:id])
        erb :'authors/edit'
    end

    patch '/authors/:id' do 
        # binding.pry
        author = Author.find(params[:id])
        author.update(name: params[:name])
        redirect "/authors/#{author.id}"
    end

    delete '/authors/:id' do
        author = Author.find(params[:id])
        author.destroy
        redirect '/authors'
    end


    
end