var server = require('server');

server.get('Start', (req, res, next) => {
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct('008884303989');
    var product1 = ProductMgr.getProduct('008884303989');
    var URLUtils = require('dw/web/URLUtils');
    //var ProductFactory = require('*/cartridge/scripts/factories/product');
    //var productTileParams = { pview: 'tile' };

    var img = product != null? product.getImage('large') : null;
    var img_url = img!=null ? img.URL: null;


    res.render('home/home', {
        name: 'Start',
        product: {
            name: product.getName(),
            url: img_url
        }

    })
    next();
});

module.exports = server.exports();