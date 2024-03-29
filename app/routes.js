const express = require('express')
const router = express.Router()
const parseUrl = require("parse-url")

router.post('/add-visitors-answer', function (req, res) {
    var addVisitors = req.session.data['add-visitors']
    const { pathname } = parseUrl(req.headers.referer)
    const prefix = pathname.split('/')
    
    if (addVisitors == "yes"){
      res.redirect(`/${prefix[1]}/addvisitors2`)
    } else {
      res.redirect(`/${prefix[1]}/adjustments`)
    }
  
  })

  router.post('/add-another-visitor', function (req, res) {
      var addAnotherVisitor = req.session.data['addAnotherVisitor']
      const { pathname } = parseUrl(req.headers.referer)
      const prefix = pathname.split('/')
      
      if (addAnotherVisitor == "true"){
        res.redirect(`/${prefix[1]}/addvisitors3`)
      } else {
        res.redirect(`/${prefix[1]}/adjustments`)
      }
    
    })

module.exports = router

