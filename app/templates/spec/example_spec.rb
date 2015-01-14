require 'spec_helper'

describe "when running the request 'GET /example'" do
  it "should return an object with the key 'message' and the value 'Hello World!'" do
    get '/example'
    expect_json({message: 'Hello World!'})
  end
end
