const express = require('express');
const connectDB = require('./config/db');
const app = express();

const PORT = process.env.IP || 5000;

//DB Connection
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//Define routes
app.use('/api/users', require('./router/api/users'));
app.use('/api/auth', require('./router/api/auth'));
app.use('/api/profile', require('./router/api/profile'));

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => console.log(`Server is running in the port ${PORT}`));
