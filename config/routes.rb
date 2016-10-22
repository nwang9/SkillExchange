Rails.application.routes.draw do
  
    root to: 'skills#index'
    devise_for :users , controllers: {
        sessions: 'users/sessions', registrations: 'registrations'
      }

      devise_scope :user do  
   get '/users/sign_out' => 'devise/sessions#destroy'     
end

      resources :users, only: [:show]
      get '/users/recommendations', to: 'users#recommendations'
      get '/users/details', to: 'users#details'
      get '/skills/search', to: 'skills#show'
      post '/skills/add_skills', to: 'skills#add_skills'
      post '/skills/add_desired_skills', to: 'skills#add_desired_skills'
end
