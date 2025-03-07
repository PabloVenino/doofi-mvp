const express = require('express');
const dotenv = require('dotenv');
const routes = require("./src/routes/index")
const errorHandler = require('./src/middlewares/erroHandler');

const { eventRoutes, authRoutes } = routes;

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', eventRoutes);
app.use("/api", authRoutes)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
