describe('send reminder via', () => {
	const reminder = {
		transactinId: '1234',
		templateId: '1234',
		message: 'custom text message',
		paymentLink: 'https://cstp.me/app/transaction/<currency>/<transactionId>'
	};

	test('an email', async () => {
		await api
			.post('/reminder/email')
			.send(reminder)
			.expect(200)
			.expect('request.body.success', true);
	});

	test('sms', async () => {
		await api
			.post('/reminder/sms')
			.send(reminder)
			.expect(200)
			.expect('request.body.success', true);
	});

	test('pair', async () => {
		await api
			.post('/reminder/pair')
			.send(reminder)
			.expect(200)
			.expect('request.body.success', true);
	});
});
