"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
const reservations = require('../controllers/reservation')
const permissions = require('../middlewares/permissions')
/* ------------------------------------------------------- */
// routes/reservation:

router
    .route("/")
    .get(permissions.isLogin, reservations.list)
    .post(permissions.isLogin, reservations.create);

router
    .route("/:id")
    .get(permissions.isLogin, reservations.read)
    .put(permissions.isStaffOrisAdmin, reservations.update)
    .patch(permissions.isStaffOrisAdmin, reservations.update)
    .delete(permissions.isAdmin, reservations.delete);

module.exports = router;