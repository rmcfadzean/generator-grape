<% if (activerecord) { %>
class Example < ActiveRecord::Base
end
<% } else { %>
class Example
end
<% } %>
