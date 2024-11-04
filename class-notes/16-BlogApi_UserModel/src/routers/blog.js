"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router()

/* ------------------------------------------------------- */
// controllers
const { blogCategory, blogPost } = require('../controllers/blog')

router.route('/category')
    .get(blogCategory.list)
    .post(blogCategory.create)

router.route('/category/:categoryId')
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete)

module.exports = router