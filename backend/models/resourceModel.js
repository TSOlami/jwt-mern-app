import mongoose from 'mongoose';

const resourceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to the user who created the resource
      required: true,
    },
    fileUrl: {
      type: String, // You can store the path or URL to the resource file
    },
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to users who upvoted the resource
      },
    ],
    downvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to users who downvoted the resource
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Resource = mongoose.model('Resource', resourceSchema);

export default Resource;
