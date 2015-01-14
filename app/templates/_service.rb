module Service
  class App < Grape::API
    <% if (activerecord) { %>
    rescue_from ActiveRecord::RecordNotFound do |e|
      # binding.pry
      rack_response({error: e.message}.to_json, 404)
    end
    <% } %>
    format :json

    mount API::Example
  end
end
