Songpoll::Application.routes.draw do
  root :to => "home#index"
  get "/soundcloud_callback.html" => "home#soundcloud_callback"
  devise_for :users, :controllers => {:registrations => "registrations"}
  resources :users
end