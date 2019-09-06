const axios = require('axios')
// require('dotenv').config()
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
const { generateToken } = require('../helpers/token')
const encrypt = require('../helpers/hash')
const User = require('../models/user')

class UserController{
    static signIn(req, res,next) {     
         
        client.verifyIdToken({
            idToken: req.body.idToken,
            audience: process.env.CLIENT_ID,
        }).then(ticket => {
            const payload = ticket.payload;
            return User.findOne({
                email: payload.email
            }).then(result => {
                if (!result) {
                   
                    return User.create({
                        name: payload.name,
                        email: payload.email,
                        password: encrypt(process.env.PASSWORD)
                    })
                } else {
                   
                    return result
                }
            }).then(user => {
                //sconsole.log('user');
                let dataUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
                let token = generateToken(dataUser)
                //console.log(token);
                res.json({
                    token
                })
            })
        }).catch(err     => {
            next(err)
        })
    }
}
module.exports = UserController;