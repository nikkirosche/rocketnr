const pg = require("pg");
const { Pool } = pg;
const express = require("express");


const app = express();
//middleware which allows express to access body
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs")

const port = 3000;

const pgConnectionConfigs = {
  user: "nicolerosche",
  host: "localhost",
  database: "postgres",
  port: 5432, // Postgres server always runs on this port
};

// create the var we'll use
const pool = new Pool(pgConnectionConfigs);

app.get("/", (req, res) => {
  // create the query done callback
  const whenQueryDone = (error, result) => {
    // this error is anything that goes wrong with the query
    if (error) {
      console.log("error", error);
    } else {
      // rows key has the data
    //   res.send(result.rows[0].name);
    console.log(result.rows[0])
    res.render("index", result.rows[0]);
    }
  };

  // write the SQL query
  const sqlQuery = "SELECT * from cats";

  // run the SQL query
  pool.query(sqlQuery, whenQueryDone);
});


app.listen(port);
