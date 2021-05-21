var express = require('express');
var router = express.Router();
const { query } = require('../db/index')
const db = require('../db/db')
const insertConference = "INSERT INTO \
conferences(username, email, meetingNumber, passcode, role)\
 VALUES($1, $2, $3, $4, $5);";

const getConferenceByInfo = "SELECT c.*\
FROM conferences c WHERE c.email = $1 AND c.meetingNumber = $2";

const getAllConferences = "SELECT * FROM conferences";
/* GET home page. */
router.get('/', async function (req, response, next) {
  const data = await db.query(getAllConferences)
  console.log(data, "-------------", data.rows)
  response.json({'tes': "123"})
});

module.exports = router;
