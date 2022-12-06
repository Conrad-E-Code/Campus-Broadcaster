use Rack::Cors do
    allow do
        origins '*'
        resoucre '*'
    end
end

run ApplicationConroller
use UserController
use Rack::



aysan notes

build conditonal compare value of posted password and send back with a status of permitte

