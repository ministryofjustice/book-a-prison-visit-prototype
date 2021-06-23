const express = require('express')
const router = express.Router()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here - above the module.exports line
router.post('/add-visitors-answer', function (req, res) {

 var addVisitors = req.session.data['add-visitors']

 if (addVisitors == "yes"){
   // Send user to next page
   res.redirect('/VJ02_book_a_visit_2/addvisitors2')
 } else {
   // Send user to ineligible page
   res.redirect('/VJ02_book_a_visit_2/adjustments')
 }

})

module.exports = router

