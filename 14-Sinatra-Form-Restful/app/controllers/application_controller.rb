class ApplicationController < Sinatra::Base

    configure do
        set :views, "app/views"
        set :method_override, true
    end
    
    #Home Page
    get '/' do
        @message = 'HELLO'
        erb :home
    end

    

   
    # dance '/books/:id' do
    #     puts 'Dancing!!!!!!'
    # end #Will not work

end
