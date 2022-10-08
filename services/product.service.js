
const {Category,Product} = require(`../models/index`);
const {Op} = require('sequelize');

const getAllProduct = async() =>{            
    const response = await Product.findAll();
    return response ;
}
const  getAllWithCategoryID = async()=>{
    const response = await Product.findAll({include:Category});
    return response;
}
const createProduct = async(data) =>{
    const response = await Product.create({
        name: data.name,
        description: data.description,
        cost: data.cost,
        category_id: data.category_id
    })
    return response;
}
const deleteProduct = async(data)=>{
    const response = await Product.destroy({
        where :{
            id : data.id
        }
    })
    return response ;
}
const updateProduct = async(productId, data) =>{
    const response = await Product.update({
        name: data.name,
        description: data.description,
        cost: data.cost,
        categoryId: data.categoryId
    },
    {
        where: {
            id: productId
        }
    })
    return response;
}
const getProductsByCostRange = async(data) =>{
    const response = await Product.findAll({
        where: {
          cost: {
            [Op.between]: [data.minCost, data.maxCost]
          }
        }
      });
    return response;
}




module.exports = {
    getAllProduct , getAllWithCategoryID , createProduct , deleteProduct ,updateProduct , getProductsByCostRange
}; 