const express = require('express');

const app = express();
const port = 3001;

app.get('/', (req, res) =>{
	res.send('working');
});

app.listen(port, () => {
	console.log(`Listening on a port ${port}`);
});