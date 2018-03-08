Rails.application.routes.draw do
  root "home#index"

  get 'signup', to: 'users#new'
  get 'signin', to: 'sessions#new'
end
