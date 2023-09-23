import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    studentEmail: {
      type: String,
      unique: true,
      default: '',
    },
    password: {
      type: String,
      required: true,
    },
    profilePicture: {
      type: String, // Path or URL to the profile picture
    },
    bio: {
      type: String,
    },
    points: {
      type: Number,
      default: 0, // Default to 0 points
    },
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post', // Reference to user's posts (if you have a Post model)
      },
    ],
    resources: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource', // Reference to user's resources (if you have a Resource model)
      },
    ],
    payments: [
      {
        session: {
          type: String, // Session identifier (e.g., academic session)
        },
        amount: {
          type: Number,
        },
        date: {
          type: Date,
          default: Date.now, // Default to the current date
        },
      },
    ],
    verified: {
      type: Boolean,
      default: false, // Default to false
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;
