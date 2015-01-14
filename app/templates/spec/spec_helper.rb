$: << File.expand_path(File.join(File.dirname(__FILE__), '..'))
ENV['RACK_ENV'] = 'test'

require 'config/environment'
require 'service'

Airborne.configure do |config|
  config.rack_app = Service::App
  # config.headers = {'x-auth-token' => 'my_token'}
end
