"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */

const { mongoose } = require("../configs/dbConnection");

const FlightsSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    airline: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    departure: {
      type: String,
      trim: true,
      required: true,
    },

    departureDate: {
      type: Date,
      required: true,
    },

    arrival: {
      type: String,
      trim: true,
      required: true,
    },

    arrivalDate: {
        type: Date,
        required: true,
    },

    createdId: {
      type: String,
      trim: true,
      required: true,
    },
  },
  {
    collection: "flights",
    timestamps: true,
  }
);

module.exports = mongoose.model('Flights', FlightsSchema)