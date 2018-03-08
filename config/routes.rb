Rails.application.routes.draw do
  root "home#index"

  get 'signup', to: 'users#new'
  get 'signin', to: 'sessions#new'

  namespace :api do
    namespace :v1 do
      resources :users, only: [:create]
    end
  end
end
