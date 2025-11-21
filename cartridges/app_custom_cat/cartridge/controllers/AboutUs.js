var server = require('server');
server.get('Show', (req, res, next)=>{
    res.render('about/about');
    next();
});

module.exports = server.exports();