class ActorsController < ApplicationController

    # set :views, "app/views"
    # set :method_override, true

    get '/actors' do 
        @actors = Actor.all
        erb :'actors/index'
    end

    get '/actors/new' do 
        @movies = Movie.all
        erb :'actors/new'
    end

    get '/actors/:id' do 
        @actor = Actor.find(params[:id])
        @movies = @actor.movies
        @characters = @actor.characters
        erb :'actors/show'
    end

    post '/actors' do
        # binding.pry
        actor = Actor.create(name:params[:actor][:name])

        if params[:actor][:movies]
            # binding.pry
            names = []
            params[:character][:name].each do |character|
                unless character.empty?
                    names << character
                end
            end

            i = 0

            params[:actor][:movies].each do |movie_id|
              
                Character.create(movie_id: movie_id, actor_id: actor.id, name: names[i])
                # movie = Movie.find(movie_id)
                # actor.movies << movie

                # i++ ruby throws error for it

                i += 1
           
            end
        end

        unless params[:movie][:title].empty?
            movie = Movie.create(params[:movie])
            actor.movies << movie 
        end

        actor.save

        redirect "/actors/#{actor.id}"


    end

    
end