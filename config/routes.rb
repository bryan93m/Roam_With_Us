Rails.application.routes.draw do
  resources :bookings
  resources :option_joins
  resources :options
  resources :users, only: [:index, :show, :create]
  resources :destinations
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  get '/auth', to: 'users#show'
  delete '/logout', to: 'sessions#destroy'

end
