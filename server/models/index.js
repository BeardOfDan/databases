const connection = require('../db').connection;

module.exports = {
  messages: {
    get: function (cb) {
      const ourQuery = 'SELECT * FROM messages';
      
      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }
        
        // console.log('\nresult.length', result.length, '\n');
        // console.log('\n\nresult\n', result);
        cb(result);
      });

    }, 
    post: function (data) {
      const ourQuery = `INSERT INTO messages (username, message, roomname) VALUES ('${data.username}', '${data.message}', '${data.roomname}');`;
      
      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }
        // console.log('\n\nresult.length', result.length);
        // console.log('record inserted: ', result);
      });

    } 
  },
 
  users: {
    // Ditto as above.
    get: function (cb) {
      const ourQuery = 'SELECT * FROM users';

      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    post: function (data) {
      const ourQuery = `INSERT INTO users (username) VALUES ('${data.username}');`;
      connection.query(ourQuery, function (err, result) {
        if (err) {
          throw err;
        }
        // console.log('record inserted: ', result);
      });
    }
  }
};

