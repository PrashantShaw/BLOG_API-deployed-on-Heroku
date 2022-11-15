const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
const PORT = process.env.PORT || 3000
const DB_URL = process.env.DATABASE_URL

//connect to DB
mongoose.connect(DB_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => { console.log('connected to DB') })


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

