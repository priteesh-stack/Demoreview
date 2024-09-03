const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

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

  const mailOptions = {
    from: 'priteeshkumarmohanty147@gmail.com',
    to: 'mohantypriteesh@gmail.com', // Replace with the email where you want to receive notifications
    subject: 'New Subscription',
    text: `New subscription from:\nName: ${name}\nEmail: ${email}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Subscription successful' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Subscription failed' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});