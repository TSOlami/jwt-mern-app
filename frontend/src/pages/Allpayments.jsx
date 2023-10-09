import { useState, useEffect } from 'react';
import axios from 'axios';

const PaymentList = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let responseData = []; // Declare a variable to store the response data

    // Make a GET request to fetch payment records from your Express.js server
    axios.get('/api/allpayments')
      .then((response) => {
        responseData = response.data.allPayments; // Store the response data in the variable
        console.log(responseData)
        setPayments(responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('all payments:', error);
        setLoading(false);
      });

    // Now you can use responseData for further processing if needed
    // For example, you can filter or manipulate the data before setting it in the state.
    // This allows you to perform additional operations with the response data.
  }, []);

  return (
    <div>
      <h2>All Payments</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {payments.map((payment) => (
            <li key={payment._id}>
              <strong>Matric Number:</strong> {payment.matricNumber}<br />
              <strong>Email:</strong> {payment.email}<br />
              <strong>Amount:</strong> {payment.amount}<br />
              <strong>Transaction Reference:</strong> {payment.transactionReference}<br />
              <strong>Date:</strong> {new Date(payment.date).toLocaleString()}<br />
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PaymentList;
