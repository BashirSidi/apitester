const app = require('./app');

app.get('/', (req, res) => {
	res.send('Welcome To CustomerPay App');
});

app.listen(process.env.PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
