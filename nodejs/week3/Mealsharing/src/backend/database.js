//require("dotenv").config();

// create connection
const knex = require("knex")({
  client: "mysql",
  connection: {
    host:'127.0.0.1',
    port:'3306',
    user: 'root',
    password:'Tariq_javid050381***',
    database: 'meal_application',
  },
  pool: { min: 0, max: 7 },
});
// Check that the connection works
knex.raw("SELECT VERSION()").then(() => {
  console.log(`connection to db successful!`);
});
module.exports = knex;



