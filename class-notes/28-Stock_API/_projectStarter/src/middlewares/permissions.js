"use strict"
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
// Middleware: permissions

function getUserInfo(req) {

    let user = req.user
    let isActive = req.user?.isActive
    let isAdmin = req.user?.isAdmin
    let isStaff = req.user?.isStaff
  
    return { user, isActive, isAdmin, isStaff }
  }
  

module.exports = {

    isLogin: (req, res, next) => {

        // Set Passive:
        return next()
        const { user, isActive } = getUserInfo(req)
        // any User:
        if (req.user && req.user.isActive) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login.')
        }
    },

    isStaffOrisAdmin: (req, res, next) => {

        if (!(req.user?.isAdmin || req.user?.isStaff)) {
          throw new Error("AuthorizationError: You must be an Admin or Staff to access this resource.", 403);
        }
    
        if (!req.user?.isActive) {
          throw new CustomError("Your account is not active. Please contact support.", 403);
        }
        next();
      },

    isAdmin: (req, res, next) => {

        // Set Passive:
        return next()
        
        // only Admin:
        if (req.user && req.user.isActive && req.user.isAdmin) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new customError('NoPermission: You must login and to be Admin.')
        }
    },

    isStaff: (req, res, next) => {

        // Set Passive:
        return next()
        
        // only Admin or Staff:
        if (req.user && req.user.isActive && (req.user.isAdmin || req.user.isStaff)) {

            next()

        } else {

            res.errorStatusCode = 403
            throw new Error('NoPermission: You must login and to be Staff.')
        }
    },
}