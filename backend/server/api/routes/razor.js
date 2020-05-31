const express = require('express');
const router = express.Router();
const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')


const razorpay = new Razorpay({
	key_id: 'rzp_test_9D1a92au7Az543',
	key_secret: 'q5O0OY0mIcWUhTBKgJRowLvp'
})


router.post('/', async (req, res) => {
	const payment_capture = 1
	const amount = req.body.amount;
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
			order_id: response.id,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
	}
})

module.exports = router;