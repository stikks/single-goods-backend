/*
* is-authenticated
* A simply policy that allows request from an authenticated user 
* using auth-token header 
*/

module.exports = async function(req, res, next) {

    console.log('authorization: ', req.headers.authorization);

    if (req.me) {
        return next();
    }

    return res.forbidden();
}