var server = require('server');

server.get('Start', (req, res, next) => {
    var ProductMgr = require('dw/catalog/ProductMgr');
    //var product = ProductMgr.getProduct('008884303989');
    var URLUtils = require('dw/web/URLUtils');
    var ProductFactory = require('*/cartridge/scripts/factories/product');
    var productTileParams = { pview: 'tile' };
    var param = {
        pview: 'tile',
        pid: '008884303989'
    };
    var exp = null;

    // try{
    //     var productTile = ProductFactory.get(param);
    // }catch(e){
    //     res.render('error', {
    //         error: {
                
    //         },
    //         showError: null,
    //         message: 'Find'
    //     })
    //     exp = e;
    //     return next();
    // }



    res.render('home/home', {
        name: 'Start',
        // product: {
        //     url: product.getImage('large').URL
        // }
    })
    next();
});

module.exports = server.exports();