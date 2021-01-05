test('create a new customer', async () => {
	const response = await server.inject({
		method: 'POST',
		url: '/customer/new',
		payload: JSON.stringify({
			customer: {
				name: 'Bashir Sidi',
				phone_number: '+2348067753836',
				store_id: '1234abcd',
				email: 'bashirsalisusidi@gmail.com',
				country: 'Nigeria',
				state: 'Kano',
				town: 'Dala',
				external_ref: 'abcd1234',
				other: [
					{
						isReferrel: true
					},
					{
						accountant: 'Mayuko'
					}
				]
			}
		})
	});

	expect(response.statusCode).toBe(200);
});
