var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// All actual paths start with /skills.

// GET /skills
router.get('/', skillsCtrl.index);

module.exports = router;

