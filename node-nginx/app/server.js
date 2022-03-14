const mysql = require("mysql");
const app = require("express")();
const port = 8080;

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = mysql.createConnection(config);

const sql = `INSERT INTO people (name) VALUES ('Carlinhos')`;
connection.query(sql);

app.get("/", async (req, res) => {
    connection.query('SELECT * FROM people;', function (error, results, fields) {
        if (error) throw error;
        const names = results.map((person) => person.name).join("</br>");
        res.status(200).send(`
            <h1>Full Cycle Rocks!</h1>
            </br>
            <p> - ${names}</p>
        `);
    });
    return connection.end();
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
