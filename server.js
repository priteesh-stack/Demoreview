const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// MongoDB Atlas connection string
const MONGODB_URI = 'mongodb+srv://mohantypriteesh:6gfKrvp3UaXtPNxR@snapfoodsubscription0.0jk5f.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

// Define a schema for the subscription data
const subscriptionSchema = new mongoose.Schema({
  name: String,
  email: String,
  date: { type: Date, default: Date.now }
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'priteeshkumarmohanty147@gmail.com', // Replace with your email
    pass: 'ohbx rjhk mfdz fmyg' // Replace with your email password or app-specific password
  }
});

app.post('/api/subscribe', async (req, res) => {
  const { name, email } = req.body;
  console.log('Received subscription request:', req.body);

  try {
    // Save to database
    const newSubscription = new Subscription({ name, email });
    await newSubscription.save();

    // Send email notification
    const mailOptions = {
      from: 'priteeshkumarmohanty147@gmail.com',
      to: 'mohantypriteesh@gmail.com', // Replace with the email where you want to receive notifications
      subject: 'New Subscription',
      text: `New subscription from:\nName: ${name}\nEmail: ${email}`
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error processing subscription:', error);
    res.status(500).json({ message: 'Subscription failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});