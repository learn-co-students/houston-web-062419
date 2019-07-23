Rails.application.routes.draw do
  resources :dragons

  # get '/dragons', to: "dragons#index", as: :my_dragons
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
