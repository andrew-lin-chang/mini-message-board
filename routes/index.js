var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello world",
    user: "Rizzler",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.post("/", (req, res, next) => {
  const message = {
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date()
  }

  messages.push(message)
  console.log(message)
  res.redirect('/')
})

module.exports = router;
