var models = require('../models');

// a helper function to escape the \ character
const escaper = function(str) {
  return str.replace(/\'/, '\\\'');
};

module.exports = {
  messages: {
    get: function (req, res) {
      const data = models.messages.get(function(data) {
        res.send(data);
      });     
    }, 
    post: function (req, res) {      
      const {id, message, username, roomname} = req.body;
      const data = {message: escaper(message), username: escaper(username), roomname: escaper(roomname)};

      models.messages.post(data);

      res.end('Query complete!');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      const data = models.users.get(function(data) {
        res.send(data);
      });
    },
    post: function (req, res) {
      const {username} = req.body;
      const data = {username: escaper(username)};

      models.users.post(data);
      res.end(`You sent this data: \n${username}`);
    }
  }
};

