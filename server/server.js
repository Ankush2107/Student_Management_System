const express =  require('express');
const cors = require('cors');
const connectToDB = require('./config/db.js');
const studentRoutes = require('./routes/student.routes.js');
require('dotenv').config();

// intialize express
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.use('/students', studentRoutes);

// DB connection
connectToDB();
app.listen(port, () => {
    console.log('Server is sunning on port:', port);
})