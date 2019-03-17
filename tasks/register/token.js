// var Sails = require("sails");

var rtg = require('random-token-generator');

module.exports = async function(grunt) {
    grunt.registerTask('token', 'create authorization token for accessing endpoints', function() {
        
        var done = this.async();

        require('sails').load({
            hooks: {
                blueprints: false,
                controllers: false,
                cors: false,
                csrf: false,
                grunt: false,
                i18n: false,
                logger: false,
                policies: false,
                pubsub: false,
                request: false,
                responses: false,
                session: false,
                socket: false,
                views: false
            }
        }, function(err, app) {
            rtg.generateKey({
                len: 256, // Generate 16 characters or bytes of data
                string: true, // Output keys as a hex string
                strong: true, // Use the crypographically secure randomBytes function
                retry: false // Retry once on error
            }, function(err, key) {

                if(err) {
                    return null;
                }

                var ts = new Date().getTime();
                var token = `${key}${ts}`;

                AccessToken.create({
                    token: token,
                    expires: ''
                }).then(function(access_token) {
                    // console.log('token:', access_token);
                    console.log('successfully created access token: ', token)
                })

                
            });
            // done();
        })
        
        // done();
    })
}