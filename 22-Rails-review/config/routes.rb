Rails.application.routes.draw do
  resources :students
  resources :instructors

  get '/', to: 'application#home'

  # get '/instructors', to: 'instructors#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
