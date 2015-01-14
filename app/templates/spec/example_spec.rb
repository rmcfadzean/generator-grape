require 'spec_helper'

describe 'GET /example' do
  it 'should return empty users array' do
    get '/example'
    expect_json({message: 'Hello World!'})
  end
end
