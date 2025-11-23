var server = require('server');

server.get('Start', (req, res, next) => {
    res.render('home/home');
    next();
});

module.exports = server.exports();