const mongoose = require('mongoose');
const config = require('../utils/config');

const mongoUrl = config.MONGO_URL;
mongoose.connect(mongoUrl, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

// schema goes here

// and export the schema
