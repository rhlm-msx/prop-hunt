
var home = module.superModule;
var server = require('server');
server.extend(home);

server.replace('Show', (req, res, next) => {
    var pmgr = require('dw/catalog/ProductMgr');
    var Product = pmgr.getProduct('vizio-vw46lfM');
    // res.render('home/home', {
        // name: Product != null ? Product.getName() : 'Not Fund'
    // });
    res.render("Find");
    next();
});
module.exports = server.exports();