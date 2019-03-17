var sails = require('sails');

var rtg = require('random-token-generator');

async function returnResponse() {
    return await rtg.generateKey({
        len: 256, // Generate 16 characters or bytes of data
        string: true, // Output keys as a hex string
        strong: true, // Use the crypographically secure randomBytes function
        retry: false // Retry once on error
    }, function(err, key) {
        if(err) {
            return null;
        }
        // console.log(key);
        return key
    });
}

module.exports.init = function() {
    // var accessToken = await sails.models.access_token.create({
    //     token: TokenGenerator.generate()
    // }).fetch();

    // return accessToken.token;
    // return TokenGenerator.generate();
    
   sails.lift(function() {
    rtg.generateKey({
        len: 256, // Generate 16 characters or bytes of data
        string: true, // Output keys as a hex string
        strong: true, // Use the crypographically secure randomBytes function
        retry: false // Retry once on error
    }, function(err, key) {
        if(err) {
            return null;
        }
        // console.log(key);

        var access_token = sails.models.access_token.create({
            token: key,
            expires: null
        }).fetch();

        console.log(access_token);

        return key
    });

   })
    // return access_token;
}

require('make-runnable');
