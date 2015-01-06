Rails.application.routes.draw do
  root 'publics#home'
  get '/catalog',      to:     'publics#catalog', as: 'catalog'
  get '/details_ads',  to: 'publics#details_ads', as: 'details_ads'
  get '/login',        to:       'publics#login', as: 'login'
  get '/sign_up',      to:     'publics#sign_up', as: 'sign_up'
  get '/news',         to:     'publics#news',    as: 'news'
end
