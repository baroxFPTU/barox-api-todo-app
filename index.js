const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connectDB = require('./src/config/db');
const { ensureAuth } = require('./src/middleware/auth');

dotenv.config({path: path.join(__dirname, 'src/config/.env')})

// Connect to DB
connectDB(process.env.MONGODB_URI);

// init app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());

// Body parser 
app.use(bodyParser.json())

// Routes
app.use('/todos', ensureAuth, require('./src/routes/todos.route'));
app.use('/', require('./src/routes/index.route'));

app.listen(PORT, () => { console.log('listening on port' + PORT)})