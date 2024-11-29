"use strict";
const passwordValidation = require("../helpers/passwordValidation");
const reservation = require("../models/reservation");
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Reservation Controller:
const Reservation = require("../models/reservation");

module.exports = {
  list: async (req, res) => {

    const data = await res.getModelList(Reservation)
    res.status(200).send({
      error:false,
      details:await res.getModelListDetails(Reservation),
      data,
    })

  },

  create: async (req, res) => {

    passwordValidation(req?.body?.password);
    const data = await Reservation.create(req.body)
    res.status(201).send({
      error: false,
      data,
    });

  },

  read: async (req, res) => {
    const id = req.user.isAdmin ? req.params.id : req.user.id;
    const data = await User.findOne({ _id: id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {},

  delete: async (req, res) => {},
};
