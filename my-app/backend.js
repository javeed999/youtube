const mysql = require('mysql2/promise');
const express = require('express');
const app = express();

app.use(express.json());

let db = null;

// Connect to MySQL instead of SQLite
const serverAndDbConnect = async () => {
  try {
    db = await mysql.createConnection({
      host: 'localhost', // Change if your MySQL is on another host
      user: 'root',      // Replace with your MySQL username
      password: 'root',      // Replace with your MySQL password
      database: 'za', // Use your MySQL database name
    });

    app.listen(3000, () => {
      console.log('Server Started');
    });

    console.log('Connected to MySQL Database');
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

// Start server and connect to DB
serverAndDbConnect();


app.get("/data",async (request,response)=>{
    try {
        const [rows] = await db.execute('SELECT * FROM zar');
        response.send(rows);
    } catch (error) {
        response.status(500).json({ error: error.message });
    }

})

app.post("/new", async (request, response) => {
  const { name, marks, branch } = request.body;

  if (!name || !marks || !branch) {
    return response.status(400).json({ error: "Missing required fields" });
  }

  try {
    // ✅ Use `?` placeholders instead of named placeholders
    await db.execute(
      `INSERT INTO zar (name, marks, branch) VALUES ("${name}",${marks},"${branch}")`,
      
    );

    response.json({ message: "Data inserted successfully!" });
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});

app.get("/find/:name", async (request, response) => {
  const { name } = request.params; // Get 'name' from the URL path

  try {
    const [rows] = await db.execute(
      `SELECT * FROM zar WHERE name = "${name}"` 
    );


    response.send(rows);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
});
