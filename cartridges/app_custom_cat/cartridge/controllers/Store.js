var server = require('server');

server.get('Show', (req, res, next)=>{
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct('008884303989');
    var product1 = ProductMgr.getProduct('008884303989');

    var img = product != null? product.getImage('large') : null;
    var img_url = img!=null ? img.URL: null;
    res.setViewData({
        product: {
            name: product.getName(),
            url: img_url
        }
    })
    res.render('store/store');
    next();
});

module.exports = server.exports();