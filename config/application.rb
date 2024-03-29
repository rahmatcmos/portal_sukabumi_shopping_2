require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Sukabumishopping
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    # config.i18n.default_locale = :de
    config.i18n.available_locales = [:id, :en]
    config.i18n.default_locale = :id

    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')
    config.autoload_paths += %W(#{config.root}/lib)
    config.assets.enabled = true
    config.assets.paths << Rails.root.join("app", "assets", "fonts")
    config.assets.paths << Rails.root.join("vendor", "assets", "fonts")
    config.assets.paths << Rails.root.join("vendor", "assets", "images")
    config.assets.paths << Rails.root.join("vendor", "assets", "stylesheets")
    config.assets.paths << Rails.root.join("vendor", "assets", "javascripts")
    config.assets.initialize_on_precompile = true
    config.action_dispatch.ignore_accept_header = true
    config.assets.precompile += %w( .svg .eot .woff .ttf backend_js.js backend_css.css )  
    config.quiet_assets = true
    config.action_dispatch.default_headers = {
        'X-Frame-Options' => 'ALLOWALL',
        'Vary' => 'Accept-Encoding'
    }
    # config.middleware.use HtmlCompressor::Rack, {preserve_line_breaks: false,javascript_compressor: :ugglifier, css_compressor: :sass, remove_intertag_spaces: true, remove_quotes: false}
  end
end
