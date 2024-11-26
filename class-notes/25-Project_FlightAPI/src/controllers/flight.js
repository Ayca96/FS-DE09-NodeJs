"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */

const Flights = require("../models/flight");

module.exports = {
  list: async (req, res) => {
    /*
         #swagger.tags = ["Flights"]
         #swagger.summary = "List Flights"
        */

    const result = await Flights.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    const result = await Flights.create(req.body);

    res.status(200).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    /* 
            #swagger.tags = ["Flights"]
            #swagger.summary = "Read Flight"
        */

    const result = await Flights.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    /*
        #swagger.tags = ["Flights"]
        #swagger.summary = "Update Flight"
        #swagger.parameters['body'] = {
            in: 'body',
            required: true,
          schema:{}
        }
    */

    const result = await Flights.updateOne({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      result,
    });
  },

  deleteFlight: async () => {
    /*
        #swagger.tags = ["Flights"]
        #swagger.summary = "Delete Flight"
    */

    const { deletedCount } = await Flights.deleteOne({ _id: req.params.id });

    res.status(deletedCount ? 204 : 404).send({
      error: !deletedCount,
    });
  },
};
