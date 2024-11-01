'use strict'

/*------------------------------------------

EXPRESSJS -- BLOG PROJECT with Mongoose 

-------------------------------------------*/

//Routes And Controllers
const router= require("express").Router()

// Controllers
const {blogCategory,blogPost} = require ('../controllers/blog') 

router.route('/category')
.post(blogCategory.create)


module.exports = router