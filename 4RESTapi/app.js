//load our app server using express
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

app.use(cors());

// ---- Recuperer les données ----
app.get('/all/' ,(req, res) => {
	console.log("fetching user with ID" + req.params)

	const connection = mysql.createConnection({
		host: 'mysql-t3mpo.alwaysdata.net',
		user:'t3mpo_crysc',
		password:'0nlineDBCrystalC0ncept_123',
		database :'t3mpo_crystal_concept'
	});

	
	connection.query("SELECT * FROM `tb_client`", (err,rows,fields) => {
		if (err) {
			console.log("Failed to query for" + err);
			return
		}
		console.log("I think we fetch users succesfully");
		res.json(rows);
		res.write()
		res.sendFile(path.join(__dirname , '../', 'db.json'))
	})
//res.end()
});

//localhost:3003
app.listen(3003, () => {
	console.log("Server is up and listening on 3003")
})

