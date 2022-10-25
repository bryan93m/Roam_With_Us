Rails.application.routes.draw do
  resources :bookings
  resources :option_joins
  resources :options
  resources :users
  resources :destinations
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
