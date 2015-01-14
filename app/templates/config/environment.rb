require 'bundler'
Bundler.require(:default, ENV['RACK_ENV'] || :development)

root_path = File.expand_path('../..', __FILE__)

module AlreadyJSON
  class << self
    def load src
      src
    end

    def dump src
      src
    end
  end
end

Kartograph.default_loader = AlreadyJSON
Kartograph.default_dumper = AlreadyJSON

Dir.glob(File.join(root_path, 'app', 'models', '*.rb')).each { |file| require file }
Dir.glob(File.join(root_path, 'app', 'mappers', '*.rb')).each { |file| require file }
Dir.glob(File.join(root_path, 'app', 'api', '**', '*.rb')).each { |file| require file }

<% if (activerecord) { %>
Grape::ActiveRecord.database_file = File.join(root_path, 'config', 'database.yml')
<% } %>
