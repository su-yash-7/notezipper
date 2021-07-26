const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');

const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
dotenv.config();
connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is Running..');
});
// app.get('/api/notes', (req, res) => {
//   res.json(notes);
// });
app.use('/api/users', userRoutes);
app.use('/api/notes', noteRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on PORT ${PORT}`));
