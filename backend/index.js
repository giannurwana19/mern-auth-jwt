const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const indexRouter = require('./src/routes/indexRouter');

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use(indexRouter);

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on port ${process.env.APP_PORT}`);
});
