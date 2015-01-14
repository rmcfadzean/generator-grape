module API
  class Example < Grape::API
    <% if (activerecord) { %>
    include Grape::ActiveRecord::Extension
    <% } %>

    get :example do
      {message: 'Hello World!'}
    end
  end
end
