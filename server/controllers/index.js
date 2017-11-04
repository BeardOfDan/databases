var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      // get the data from the database
      const data = 'This (message) data needs to come from the database'; // fill this with a get request to the database

      // return the data to the user
      res.send(data);
      
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // extract the data from the POST request        
      const {id, message, username, roomname} = req.body;

      // send the data to the database
      // TODO
            
      // send a response, so that it knows we recieved the data
      // NOTE: should set a header and replace the below with something more succinct
      res.end(`You sent this data: \n${id} \n${message} \n${username} \n${roomname}`);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      const data = 'This (user) data needs to come from the database';
    
      res.send(data);
    },
    post: function (req, res) {
      const {id, username} = req.body;
    
      // send the data to the database
      // TODO

      res.end(`You sent this data: \n${id} \n${username}`);
    }
  }
};

