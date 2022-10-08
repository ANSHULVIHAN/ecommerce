const authController = require('../controllers/auth.controller');

const routes = (app) =>{
    /* route for sign up*/
    app.post('/ecomm/api/v1/signup', authController.signup);

     /* route for sign in*/
     app.post('/ecomm/api/v1/signin', authController.signin);

}

module.exports = routes;
















//const authController = require('../controllers/auth.controller');
//const AuthenticationMiddleWare = require('../middlewares/authentication.validators')
//const routes = (app) =>{
  
    /* route for sign up*/
  //  app.post('/ecomm/api/v1/signup', authController.signup);
    // route for sign in
    //app.post('/ecomm/api/v1/signin', authController.signin);

        /* route for adding roles */
    // app.patch('/ecomm/api/v1/user/:userId', AuthenticationMiddleWare, authController.addRoleToUser);

//module.exports = routes }
