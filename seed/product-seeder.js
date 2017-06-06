var Product = require('../models/product');
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/shopping');


var products = [
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/c/om/compare/iphone/compare-iphone-7plus-201609?wid=163&hei=175&fmt=png-alpha&qlt=95&.v=1472675183888" alt="..." class="img-responsive">',
        title: 'Iphone 7 plus',
        description: 'В iPhone 7 все важнейшие аспекты iPhone значительно улучшены. Это принципиально новая система камер для фото- и видеосъёмки. Максимально мощный и экономичный аккумулятор iPhone. Стереодинамики с богатым звучанием. Самый яркий и разноцветный из всех дисплеев iPhone. Защита от брызг и воды.1 И его внешние данные впечатляют не менее, чем внутренние возможности. Всё это iPhone 7.',
        price: 200
    }),
    new Product({
        imagePath: 'https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/c/om/compare/iphone/compare-iphone-7plus-201609?wid=163&hei=175&fmt=png-alpha&qlt=95&.v=1472675183888" alt="..." class="img-responsive">',
        title: 'Iphone 6 plus',
        description: 'Awesome telephone!!!',
        price: 100
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


