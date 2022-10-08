const express = require('express');
const bodyParser = require('body-parser');
const categoryRoutes = require('./routes/category.route');
// const productRoutes = require('./routes/product.route');
const route  =require(`./routes/product.route`);
const authRoutes = require('./routes/auth.routes');
const roleRoutes = require('./routes/role.routes');
const orderRoutes = require('./routes/order.routes');
const {PORT} =  require('./config/serverConfig');
//const {User, Role, sequelize} = require('./models/index');
const {sequelize} = require('./models/index');
const {User} = require(`./models/index`);
const {Role} = require(`./models/index`);
const app = express();

/* app.use() is using the provided middleware for every incoming request to the server*/
/* We need to a body parser middleware, that will help express to read all the query and body params */
app.use(bodyParser.urlencoded({extended: true}));

categoryRoutes(app);
// productRoutes(app);
route(app);
authRoutes(app);
roleRoutes(app);
orderRoutes(app);


app.listen(PORT, async()=>{
    await sequelize.sync(); // this to sync all the models (it will create the through table User_Roles in db)
/*const myUser= await User.create({
 username : "website",
 email : "web@gmail.com",
 password : "anshul11",
})
const adminRole=await Role.findOne({
    where:{
        name:'admin'
    }
});
const response=await myUser.addRole(adminRole);
console.log(response); 
*/

   console.log('server is listening to port: ', PORT);
});


