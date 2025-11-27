var server = require('server');

server.get('Show', (req, res, next)=>{

    var catalog = require('dw/catalog/CatalogMgr');
    var pmgr = require('dw/catalog/ProductMgr');
    var elc = catalog.getCategory('electronics');
    var recom = elc.getAllRecommendations().iterator();

    var names = '';
    var data;
    var rcom_cata;
    while(recom.hasNext()){
        data = recom.next();
        rcom_cata = data.getCatalog();
        //pmgr.queryProductsInCatalog(rcom_cata);
        names += rcom_cata.getDisplayName() + ' , ' + rcom_cata.getDescription() + '|';
    }

    res.setViewData({data: names});
    res.render('recom/list');

    next();
});

module.exports = server.exports();