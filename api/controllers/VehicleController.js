/**
 * VehicleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    /**
     * handle feedback response from customs 
     */
    customsFeedback: function(req, res) {
        res.json({success: true});
    }
};

