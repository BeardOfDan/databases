var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      const data = models.messages.get(function(data) {
        res.send(data);
      });     
    }, 
    post: function (req, res) {      
      const {id, message, username, roomname} = req.body;
      const data = {id, message, username, roomname};

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
      const data = {username};

      models.users.post(data);
      res.end(`You sent this data: \n${username}`);
    }
  }
};

