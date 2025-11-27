var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');

var home = module.superModule;
server.extend(home);


server.replace('Show',  cache.applyDefaultCache, function (req, res, next) {

    res.render('home/homePage');
    next();
});

module.exports = server.exports();
