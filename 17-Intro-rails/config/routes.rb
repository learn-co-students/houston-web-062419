Rails.application.routes.draw do
  # get 'birds/index'
  # get 'birds/show'
  # get 'birds/new'
  # get 'birds/create'
  # get 'birds/edit'
  # get 'birds/update'
  # get 'birds/destroy'
  get '/dogs', to: 'dogs#index'
  get '/dogs/new', to: 'dogs#new'
  get '/dogs/:id', to: 'dogs#show'
  post '/dogs', to: 'dogs#create'
  get '/dogs/:id/edit', to: 'dogs#edit'
  patch '/dogs/:id', to: 'dogs#update'
  delete '/dogs/:id', to: 'dogs#destroy'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :birds
end
