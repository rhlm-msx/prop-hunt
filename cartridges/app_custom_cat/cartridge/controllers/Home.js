var home = module.superModule;

var server = require('server');
server.extend(home);

server.replace('Show', (req, res, next) => {
    res.render('home/home');
    next();
});
module.exports = server.exports();