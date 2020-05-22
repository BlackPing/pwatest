const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const static_path = path.join(__dirname, '/../build/static');
app.use('/static', express.static(static_path));

app.listen(7800, '192.168.219.105', () => {
	console.log('server on');
});