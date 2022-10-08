const {getAllProduct,getAllWithCategoryID,createProduct , deleteProduct} = require(`../services/product.service`);
const getProduct  = async(req,res)=>{
    const response = await getAllProduct();
    return res.json({
        message : "Successfully Fetched The data ",
        data : response,
        code: 200
    })
}
const getCategoryData = async(req,res)=>{
    const response = await getAllWithCategoryID();
    return res.json({
        message : "Successfully Fetched The data With CategoryData ",
        data : response,
        code: 200
    })
}
const createProductController = async(req,res)=>{
    const response = await createProduct(req.body);
    return res.json({
        message : "Data Successfully Created",
        data : response,
        code : 200
    })
}
const DeleteAllProduct = async(req,res)=>{
    const response = await deleteProduct(req.body);
    return res.json({
        message : "Successfully Deleted Data",
        data : response ,
        code: 200
    })
}
const updateProduct = async(req, res) =>{
    const response = await updateProduct(req.params.productId,req.body);
    return res.json({
        message: 'Successfully updated the products',
        success: true,
        code: 200,
        data: response
    });
}

const getProductsByCostRange = async(req, res) =>{
    const response = await getProductsByCostRange;
    return res.json({
        message: 'Successfully fetched all the products',
        success: true,
        code: 200,
        data:response
    });
}
const getAllProductsByCategoryId = async(req, res) =>{
    const response = await getAllProductsByCategoryId;
    return res.json({
        message: 'Successfully fetched all the products',
        success: true,
        code: 200,
        data:response
    });
}


module.exports = {
    getProduct , getCategoryData , createProductController , DeleteAllProduct ,updateProduct, getProductsByCostRange,getAllProductsByCategoryId
}


















/*


const ProductService = require('../services/product.service')

const getProducts = async(req, res) =>{
    const allProductsData = await ProductService.getAllProducts();
    return res.json({
        message: 'Successfully fetched the products',
        success: true,
        code: 200,
        data: allProductsData
    });
}

const getProductsWithCategories = async(req, res) =>{
    const allProductsData = await ProductService.getAllProductsWithCategories();
    return res.json({
        message: 'Successfully fetched the products',
        success: true,
        code: 200,
        data: allProductsData
    });
}

const createProduct = async(req, res) =>{
    const response = await ProductService.createProduct(req.body);
    return res.json({
        message: 'Successfully created the product',
        success: true,
        code: 200,
        data: response
    });
}

const updateProduct = async(req, res) =>{
    const response = await ProductService.updateProduct(req.params.productId,req.body);
    return res.json({
        message: 'Successfully updated the products',
        success: true,
        code: 200,
        data: response
    });
}

const deleteProduct = async(req, res) =>{
    const response = await ProductService.deleteProduct(req.params.productId);
    return res.json({
        message: 'Successfully deleted the product',
        success: true,
        code: 200,
        data:response
    });
}

const getAllProductsByCategoryId = async(req, res) =>{
    const response = await ProductService.getAllProductsByCategoryId(req.params.categoryId);
    return res.json({
        message: 'Successfully fetched all the products',
        success: true,
        code: 200,
        data:response
    });
}

const getProductsByCostRange = async(req, res) =>{
    const response = await ProductService.getProductsByCostRange(req.query);
    return res.json({
        message: 'Successfully fetched all the products',
        success: true,
        code: 200,
        data:response
    });
}

module.exports = {getProducts, getProductsWithCategories, createProduct, updateProduct, deleteProduct, getAllProductsByCategoryId, getProductsByCostRange}*/