/**
 * AccountController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 var _ = require('lodash');

 var axios = require('axios');

 var kue = require('kue');

 let queue = kue.createQueue({
    redis: {
      host: '3.87.224.155',
      port: 6379 // default
    }
});

module.exports = {
  
    /**
    ** GET request to customs vehicle information endpoint
    **/
    async checkVehicle(req, res) {
        try { 
            // var requiredParams = ['email', 'chassis_number'];

            // var body = _.pick(req.body, requiredParams);

            if (!req.body.email) {
                return res.status(400).json({message: {
                    email: 'This field is required'
                }})
            }

            if (!req.body.chassis_number) {
                return res.status(400).json({message: {
                    chassis_number: 'This field is required'
                }})
            }

            var account = await Account.findOne({
                email: req.body.email
            })
            /**
             * if account found, else 
             * create account
             * post data to customs 
             */
            if (!account) {
                var account = await Account.create({
                    email: req.body.email,
                    chassis_number: req.body.chassis_number
                })
            }
            
            // send data to customs
            axios.post('api/v1/custom', {
                'Content-Type': 'application/json',
                'Authorization': 'Token 0ab4af60895ff0e7e782deab598a936038bdf3a07cfede7006f594dcb640b214da0c1b28e3e0a4ed1eae5f59674c937cb0958879ee9e2abe38e50ffba05f49387932e97404098752f518e760cead7b046334407a4255983f791d227f604b4dcc85959af05f5820b94e7dbeb75eaca4ac884ab637f1d40cb8b94b9a153c3c50fa1552817507104'
            }).then((response) => {
                return res.json({data: {}});
            }).catch((error) => {
                return res.status(error.response.status).json({validationErrors: error.response.data});
            })

        } catch(err) {
            console.log(err);
            return res.status(422).json({validationErrors: err.details});
       }
    }

};

