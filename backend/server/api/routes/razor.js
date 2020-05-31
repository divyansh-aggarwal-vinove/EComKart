const express = require('express');
const router = express.Router();
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')


const razorpay = new Razorpay({
	key_id: 'rzp_test_vLNbYn02pgYkTZ',
	key_secret: 'xHlC4BWSg1NquNP1m2zzYt2k'
})


router.post('/', async (req, res) => {
	const payment_capture = 1
	const amount = 499
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			// currency: response.currency,
			// amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

module.exports = router;