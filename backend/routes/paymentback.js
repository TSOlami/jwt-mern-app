// Import necessary modules
import { Router } from 'express';
import paystack from 'paystack';
import axios from 'axios'; // Import Axios for making HTTP requests
import Payment from '../models/paymentModel.js'; // Import the Payment model

// Create an Express router instance
const router = Router();

// Initialize Paystack with your secret key from environment variables
const paystackInstance = paystack(process.env.PAYSTACK_SECRET_KEY);



// Define a GET route to fetch payment records
router.get('/allpayments', async (req, res) => {
  try {
    // Use Mongoose to query the database and retrieve payment records
    const allPayments = await Payment.find({})

    // Send the payment records as a JSON response
    res.json({ allPayments });
    } catch (error) {
    // Handle errors and send an error response
    console.error('Error fetching payment records:', error);
    res.status(500).json({ error: 'Failed to fetch payment records' });
  }
});

// Define a POST route for initiating a payment
router.post('/', async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { matricNo ,email, amount } = req.body;

    // Make a POST request to the Paystack Initialize Transaction endpoint
    const paystackResponse = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amount * 100, // Convert amount to kobo
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`, // Replace with your actual secret key
        },
      }
    );



    // Check if the Paystack response was successful
    if (paystackResponse.data.status) {
      const { authorization_url } = paystackResponse.data.data;
      const { reference } = paystackResponse.data.data;

      //create a new payment record
      const newPayment = new Payment({
        matricNumber: req.body.matricNo,
        email: req.body.email,
        amount: req.body.amount,
        transactionReference: reference, // Add transaction reference to the Payment model
      });

      // Save the new Payment record to the database
      await newPayment.save();

      // Return the Paystack authorization URL in the response
      res.json({ 
        success: true,
        message: 'Payments details saved',
        payment_url: authorization_url, reference: reference });
    } else {
      // Handle the case where the payment initialization failed
      res.status(500).json({ error: 'Payment initiation failed' });
    }
  } catch (error) {
    // Handle errors and send an error response
    console.error('Error initiating payment:', error);
    res.status(500).json({ error: 'Payment initiation failed' });
  }
});




// Export the router for use in other parts of your application
export default router;
