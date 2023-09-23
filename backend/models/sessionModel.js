import mongoose from 'mongoose';

const sessionSchema = mongoose.Schema(
  {
    name: {
      type: String, // Session name or identifier (e.g., "2023/2024")
      required: true,
    },
    duesPrice: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      default: false, // Default to false (inactive)
    },
  },
  {
    timestamps: true,
  }
);

const Session = mongoose.model('Session', sessionSchema);

export default Session;
