const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const propertyRoutes = require('./routes/propertyRoutes');
app.use('/properties', propertyRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
