/*
* is-authenticated
* A simply policy that allows request from an authenticated user 
* using auth-token header 
*/

module.exports = async function(req, res, next) {

    var authorization_header = req.headers.authorization;

    console.log(authorization_header);

    if (authorization_header == undefined) {
        return res.forbidden();
    }

    var token = authorization_header.substr(6, );

    var account = await AccessToken.findOne({
        token: token
    })

    if (account) {
        return next();
    }

    return res.expired();
}