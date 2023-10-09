import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema(
  {
    matricNumber: {
      type: String, // Matriculation number of the student (if applicable)
      required: true,
    },
    email: {
      type: String, // Email of the person making the payment
      required: true,
    },
    amount: {
      type: Number, // The amount of the payment
      required: true,
    },
    transactionReference: {
      type: String, // The transaction reference from Paystack
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the Category model (if applicable)
      ref: 'Category', // Make sure 'Category' matches your actual category model name
    },
    session: {
      type: String, // Session or term (if applicable)
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model (if applicable)
      ref: 'User', // Make sure 'User' matches your actual user model name
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
