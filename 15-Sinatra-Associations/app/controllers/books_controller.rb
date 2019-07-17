class BooksController < ApplicationController

    # set :views, "app/views/books"

    #Index page => Displaying all the books
    get '/books' do
        @books = Book.all
        erb :'books/index'
    end

    #New book
    get '/books/new' do
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
        book = Book.create(params)
        redirect "/books/#{book.id}"
    end

    #Edit a book form
    get '/books/:id/edit' do
        @book = current_book
        erb :'books/edit'    
    end

    #Edit a book
    patch '/books/:id' do
        # binding.pry
        book = current_book

        book.update(title: params[:title], snippet: params[:snippet])
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