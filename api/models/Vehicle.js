/**
 * Vehicle.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id: { 
      type: 'number', 
      autoIncrement: true 
    },
    createdAt: { 
      type: 'number', 
      autoCreatedAt: true 
    },
    updatedAt: { 
      type: 'number', 
      autoUpdatedAt: true 
    },
    chassis_number: {
      type: 'string',
      required: true
    },
    vehicle_type: {
      type: 'string',
      required: true
    },
    year_manufactured: {
      type: 'string'
    },
    year_imported: {
      type: 'string'
    },
    vehicle_model: {
      type: 'string'
    },
    value_dollars: {
      type: 'number',
      required: true
    },
    bill_of_lading: {
      type: 'string'
    },
    agent_name: {
      type: 'string'
    },
    duty_rate: {
      type: 'number'
    },
    license_no: {
      type: 'string'
    },
    license_date: {
      type: 'string'
    },
    hs_code: {
      type: 'string'
    },
    service_no: {
      type: 'string'
    },
    rank: {
      type: 'string'
    },
    area: {
      type: 'string'
    }
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

