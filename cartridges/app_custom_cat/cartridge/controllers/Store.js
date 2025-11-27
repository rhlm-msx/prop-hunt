var server = require('server');

server.get('Show', (req, res, next)=>{
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct('008884303989');
    var product1 = ProductMgr.getProduct('008884303989');

    var img = product != null? product.getImage('large') : null;
    var img_url = img!=null ? img.URL: null;
    var product_ids = [ "samsung-ln22a650M","25686514M","samsung-ln22a650M","samsung-ln22a650M","samsung-ln22a650M" ];
    res.setViewData({
        product: {
            name: product.getName(),
            url: img_url,
            id: '008884303989'
        },
        products : product_ids
    })
    res.render('store/store');
    next();
});

module.exports = server.exports();