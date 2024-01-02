const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

const app = express();

app.use (cors());

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`server is running on ${PORT}`));