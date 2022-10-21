var express = require('express');
var router = express.Router();

var skillsCtrl = require('../controllers/skills');

/* GET users listing. */
// All actual paths start with /skills.

// GET /skills
router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);

module.exports = router;

