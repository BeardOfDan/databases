var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      const data = models.messages.get(function(data) {
        res.send(data);
      });     
    }, 
    post: function (req, res) {
      // extract the data from the POST request        
      const {id, message, username, roomname} = req.body;
      const data = {id, message, username, roomname};

      // console.log('\n\n');
      // console.log(`You sent this data: \n${id} \n${message} \n${username} \n${roomname}`);
      // console.log('\n\n');

      // send the data to the database
      models.messages.post(data);

      res.end('Query complete!');
            
      // send a response, so that it knows we recieved the data
      // NOTE: should set a header and replace the below with something more succinct
      // res.end(`You sent this data: \n${id} \n${message} \n${username} \n${roomname}`);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      const data = models.users.get(function(data) {
        res.send(data);
      });
    },
    post: function (req, res) {
      const {id, username} = req.body;
      const data = {id, username};

      // send the data to the database
      // TODO

      models.users.post(data);
      res.end(`You sent this data: \n${id} \n${username}`);
    }
  }
};

