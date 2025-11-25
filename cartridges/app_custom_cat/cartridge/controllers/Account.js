var server = require('server');
var account = module.superModule;
server.extend(account);


server.get('getName', (req, res, next) => {
        var name = null;
        if (req.currentCustomer.profile) {
           name = req.currentCustomer.profile.firstName;
        }
        res.setViewData({name: name});
        res.render('components/footer/account');
        next();
});

module.exports = server.exports();
