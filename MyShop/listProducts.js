var faker = require('faker');
for(var i=0;i<10;i++){
    var randomName = faker.commerce.productName();
    var randomPrice = faker.commerce.price();
    console.log("name is "+randomName+"price is "+randomPrice);
}

