import mongoose from 'mongoose';

const paymentSchema = mongoose.Schema(
  {
    session: {
      type: String, // Session identifier (e.g., academic session)
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the user who made the payment
      required: true,
    },
    date: {
      type: Date,
      default: Date.now, // Default to the current date
    },
  },
  {
    timestamps: true,
  }
);

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;
