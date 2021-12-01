const express =require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt =require('jsonwebtoken');
const auth = require('../../middelwaer/auth')


// users model
const Users = require('../../models/user')


//  @route post api/Users
// @ desc Register auth user
// @access puplic
router.post ('/',(req,res)=>{
    const { email, password} = req.body;
    //  simple validation
    if( !email || !password){
        return res.status(400).json({msg:"please enter all fields"})
    }
    //  check for existing user
    User.findOne({email})
    .then(user =>{
        if(!user) return res.status(400).json({msg:"user Does not exist"})

        // validate password
    bcrypt.compare(password,user.password)
    .then(isMatch =>{
        if(!isMatch) return res.status(400).json({msg:'Incalid credentials'})

        jwt.sign(
            {id:user.id},
            config.get("jwtSecret"),
            {expiresIn :3600},
            (err,token)=>{
                if(err) throw err;
                res.json({
                    token,
                    user:{
                        id:user.id,
                        name:user.name,
                        email:user.email
                    }
                })

            }
        )
    })
    })
    
    
})
//  @route get api/auth/user
// @ desc get user  data
// @access private
router.get('/user',auth,(req,res)=>{
    Users.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
  })


module.exports = router;