const express = require('express');
const dotenv = require('dotenv');
const eventRoutes = require('./src/routes/event.routes');
const errorHandler = require('./src/middlewares/erroHandler');

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', eventRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
