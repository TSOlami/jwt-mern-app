// Import necessary modules
import { Router } from 'express';
import paystack from 'paystack';
import axios from 'axios'; // Import Axios for making HTTP requests

// Create an Express router instance
const router = Router();

// Initialize Paystack with your secret key from environment variables
const paystackInstance = paystack(process.env.PAYSTACK_SECRET_KEY);

// Define a POST route for initiating a payment
router.post('/', async (req, res) => {
  try {
    // Extract necessary data from the request body
    const { email, amount } = req.body;

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

      // Return the Paystack authorization URL in the response
      res.json({ payment_url: authorization_url });
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
