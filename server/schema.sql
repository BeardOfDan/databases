CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY,
  username TEXT,
  message TEXT,
  roomname TEXT
);

/* Create other tables and define schemas for them here! */

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  username TEXT
);

-- CREATE TABLE messages_users (
--   id INTEGER PRIMARY KEY,
--   user_id INTEGER,
--   message_id INTEGER
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

