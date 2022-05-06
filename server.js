const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


// {
//   "title": "Runbuddy reaches 4 million subscribers",
//   "post_url": "https://runbuddy.com/press",
//   "user_id": 1
// }


// {
// 	"username": "penius",
// 	"email": "slevin@gmail.com",
// 	"password" : "penistown"
// }