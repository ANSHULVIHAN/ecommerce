const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');
const authHelperService = require('../services/auth-helper.service');
require('dotenv').config();

const signup = async(req, res) =>{
    const response = await authService.signup(req.body);
    return res.json({
        message: 'Successfully signed up',
        success: true,
        data: response,
        code: 200,
    })
}  


const signin = async(req, res) =>{
//    const userData = await authService.getUserByEmail(req.body.email);
    const userData = await authHelperService.getUserByEmail(req.body.email);
    if(!userData){ //user is not present in db for given email
        return res.json({
            message: 'Email id is incorrect, please try again',
            success: true,
            data: null,
            code: 400,
        })
    }else{//user is present in db for given email
        // passwordGivenByUser is req.body.password;
        //actualHashedPasswordStoredInDb is userData.password;
        const passwordVerified = authService.verifyPassword(req.body.password, userData.password);
        if(passwordVerified){ //password is correct
           // const jwt = require('jsonwebtoken'); 
            
    const token = jwt.sign({ email: userData.email, password: userData.password, username: userData.username}, process.env.JWT_SECRET_KEY);
            return res.json({
                message: 'Signed in successfully',
                success: true,
                code: 200,
                token: token
                        });
        }else{//password is incorrect
            return res.json({
                message: 'Password is incorrect, please try again',
                success: true,
                data: null,
                code: 400,
            });
        }
    }

}/*
const addRoleToUser = (req, res) =>{
    let response = authService.addRoleToUser(req.params.userId, req.body.roleId);
    if(response){
        return res.json({
            message: 'Role is added successfully',
            success: true,
            code: 200,
        });
    }
    else{
        return res.json({
            message: 'Internal server error',
            success: true,
            code: 500,
        });
    }
}
*/

module.exports = {signup, signin}






















/*const { response } = require('express');
const authService = require('../services/auth.service');

const signup = async(req, res) =>{
    const response = await authService.signup(req.body);
    return res.json({
        message: 'Successfully signed up',
        success: true,
        data: response,
        code: 200,
    })
}

const signin=async(req,res)=>{
    const userData=await authService.getUserByEmail(req,body,email);
    if(!userData){ // user is not persent in db for given email
        return res.json({
            message:'Email id is incorect,plz try again',
            success: false,
            data: null,
            code:400
        })

    }else{ //user is not persent in db for given email

//const passwordGivenByUser is req.body.password;
//const actualHashedPassword store in db is userData.password;        
const passwordVarified=authService.verifyPassword(req,body.password,userData.password);
if(passwordVarified){ // password is correct
        return res.json({
            message:'signed in suceesfully',
            success: false,
            data: null,
            code:400
        })
    }else{ // password is incorrect
        
        }

    }
}
    


module.exports = {signup} */