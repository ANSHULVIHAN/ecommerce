const AuthenticationMiddleWare = require('../middlewares/authentication.validators')
const {getProduct, getCategoryData,createProductController,DeleteAllProduct,getProductsByCostRange,getAllProductsByCategoryId} = require(`../controllers/product.controller`);
const route = (app)=>{
    app.get("/ecomm/api/v1/ProductData",getProduct);
    app.get("/ecomm/api/v1/Product-Category",getCategoryData);
    //app.post('/ecomm/api/v1/products',createProductController);
    app.post('/ecomm/api/v1/products', AuthenticationMiddleWare.isAuthenticated, AuthenticationMiddleWare.checkAdminOrSeller, createProductController);
    app.delete('/ecomm/api/v1/Product-Delete',DeleteAllProduct);
    app.get('/ecomm/api/v1/productsByCostRange/', getProductsByCostRange);
    app.get('/ecomm/api/v1/products/:categoryId',getAllProductsByCategoryId);
}

module.exports = route; 
















/*
const {getProduct, getCategoryData,createProductController,DeleteAllProduct,} = require(`../controllers/product.controller`);
const route = (app)=>{
    app.get("/ecomm/ProductData",getProduct);
    app.get("/ecomm/Product-Category",getCategoryData);
    app.post('/ecomm/api/v1/products',createProductController);
    app.delete('/ecomm/Product-Delete',DeleteAllProduct);
}
module.exports = route; */