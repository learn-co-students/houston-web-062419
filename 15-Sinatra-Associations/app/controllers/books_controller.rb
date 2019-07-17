class BooksController < ApplicationController

    # set :views, "app/views/books"

    #Index page => Displaying all the books
    get '/books' do
        @books = Book.all
        erb :'books/index'
    end

    #New book
    get '/books/new' do
        @authors = Author.all
        erb :'books/new'
    end

     #Show Page => Display a single book
     get '/books/:id' do
        # binding.pry
        @book = current_book
        erb :'books/show'
    end

    #Create a new book
    post '/books' do
        # binding.pry
        book = Book.new(params[:book])
        # binding.pry
        if !params[:author][:name].empty?
            # binding.pry
            new_author = Author.create(params[:author])
            book.author = new_author
        end
        # binding.pry
        book.save

        redirect "/books/#{book.id}"
    end

    #Edit a book form
    get '/books/:id/edit' do
        @book = current_book
        @authors = Author.all
        erb :'books/edit'    
    end

    #Edit a book
    patch '/books/:id' do
        # binding.pry
        book = current_book

        book.update(title: params[:title], snippet: params[:snippet], author_id: params[:author_id])
        redirect "/books/#{book.id}"
        # redirect "/books/#{params[:id]}"

    end

    #Delete a book
    delete '/books/:id' do
        # binding.pry
        book = current_book
        book.destroy 

        redirect '/books'
    end


    private
    def current_book
        Book.find(params[:id])
    end


end