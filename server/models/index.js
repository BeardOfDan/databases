const connection = require('../db').connection;

module.exports = {
  messages: {
    get: function (cb) {
      const ourQuery = 'SELECT * FROM chat';
      
      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      });

    }, 
    post: function (data) {
      const ourQuery = `INSERT INTO chat (id, username, message, roomname) VALUES (${data.id}, '${data.username}', '${data.message}', '${data.roomname}');`;
      
      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }
        console.log('record inserted: ', result);
      });

    } 
  },
 
  users: {
    // Ditto as above.
    get: function (cb) {
      const ourQuery = '';
    },
    post: function (data) {
      const ourQuery = `INSERT INTO users (id, username) VALUES (${data.id}, '${data.username}');`;
      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }
        // console.log('record inserted: ', result);
      });
    }
  }
};

