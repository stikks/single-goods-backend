module.exports = {


  friendlyName: 'Create access token',


  description: 'Create an access token to authenticate requests',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs) {
    // TODO
    rtg.generateKey({
        len: 256, // Generate 16 characters or bytes of data
        string: true, // Output keys as a hex string
        strong: true, // Use the crypographically secure randomBytes function
        retry: false // Retry once on error
    }, function(err, key) {
        console.log('creating token');

        if(err) {
            return null;
        }

        console.log(key)

        // var access_token = sails.models.access_token.create({
        //     token: key,
        //     expires: null
        // }).fetch();

        // console.log(access_token);

        return key
    });
  }


};

