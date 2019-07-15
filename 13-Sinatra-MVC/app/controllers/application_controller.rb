class ApplicationController < Sinatra::Base

    set :views, "app/views"
    set :method_override, true

    #Home Page
    get '/' do
        @message = 'HELLO'
        erb :home
    end

    #Index page => Displaying all the books
    get '/books' do
        @books = Book.all
        erb :index
    end

    #New book
    get '/books/new' do
        erb :new
    end

    #Show Page => Display a single book
    get '/books/:id' do
        # binding.pry
        @book = Book.find(params[:id])
        erb :show
    end

    #Create a new book
    post '/books' do
        Book.create(params)
        redirect '/books'
    end

    #Edit a book form
    get '/books/:id/edit' do
        @book = Book.find(params[:id])
        erb :edit
    end

    #Edit a book
    patch '/books/:id' do
        # binding.pry
        book = Book.find(params[:id])

        book.update(title: params[:title], snippet: params[:snippet])
        redirect "/books/#{book.id}"
        # redirect "/books/#{params[:id]}"

    end

    #Delete a book
    delete '/books/:id' do
        # binding.pry
        book = Book.find(params[:id])
        book.destroy 

        redirect '/books'
    end

    # dance '/books/:id' do
    #     puts 'Dancing!!!!!!'
    # end #Will not work




end
