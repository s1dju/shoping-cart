var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/c/om/compare/iphone/compare-iphone-7plus-201609?wid=163&hei=175&fmt=png-alpha&qlt=95&.v=1472675183888" alt="..." class="img-responsive">',
        title: 'Iphone 7 plus',
        description: 'Awesome telephone!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/c/om/compare/iphone/compare-iphone-7plus-201609?wid=163&hei=175&fmt=png-alpha&qlt=95&.v=1472675183888" alt="..." class="img-responsive">',
        title: 'Iphone 7 plus',
        description: 'Awesome telephone!!!',
        price: 10
    })
];

var done = 0; 

    for (var i = 0; i<products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if (done===products.length) {
            exit();
        }
    });
    }
function exit(){
    mongoose.disconnect();
}


