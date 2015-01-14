class ExampleMapper
  include Kartograph::DSL

  kartograph do
    mapping Example

    root_key singular: 'example', plural: 'examples', scopes: [:read]

    property :id, scopes: [:read]
    property :message, scopes: [:read]
  end
end
