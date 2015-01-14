# generator-grape

[Yeoman](http://yeoman.io) generator to create a basic [Grape::API](https://github.com/intridea/grape) application (with or without ActiveRecord)


## Getting Started


### Installation

```bash
npm install -g generator-grape
```

```bash
yo grape
```

### Testing your API

The testing is done through the [Airborne](https://github.com/brooklynDev/airborne) gem which is a nice wrapper around `rack-test` & `rspec`

**A simple test:**

```ruby
describe 'GET /example' do
  it 'should return empty users array' do
    get '/example'
    expect_json({message: 'Hello World!'})
  end
end
```

**Running the test:**

`rspec`


### TODO:

* API Versioning
* Alternative ORMs (?)
* Helpers
* Cleaner environment config
* Options to turn off examples

### Built with

* [Yeoman](http://yeoman.io)
* [Grape](https://github.com/intridea/grape)
* [Kartograph](https://github.com/digitalocean/kartograph)
* [Airborne](https://github.com/brooklynDev/airborne)



## License

Copyright (c) 2015 Rob McFadzean

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
