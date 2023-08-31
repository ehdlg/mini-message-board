var express = require('express');
var router = express.Router();
const messages = require('../data/messages');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('form.ejs', { title: 'New message', header: 'Add a new message' });
});

router.post('/', (req, res) => {
  const body = req.body;
  const newMessage = {
    text: body.message,
    user: body.user,
    added: new Date(),
  };

  messages.push(newMessage);
  res.redirect('/');
});

module.exports = router;
