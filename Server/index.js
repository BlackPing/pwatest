const express = require('express');
const fs = require('fs');
const app = express();

app.use('/', express.static('./build'));

app.listen(7800, '192.168.219.105', () => {
	console.log('server on');
});