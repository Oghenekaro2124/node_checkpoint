const nodemailer = require('nodemailer');

// Create transporter object with SMTP transport configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',                 // Use Gmail as the email service
  auth: {
    user: 'your-email@gmail.com',    // Your Gmail address
    pass: 'your-app-password'        // Your App Password generated from Google
  }
});

// Define email options
const mailOptions = {
  from: 'your-email@gmail.com',      // Sender's email address
  to: 'your-email@gmail.com',        // Recipient's email address (can be multiple)
  subject: 'Test Email from Node.js', // Subject line
  text: 'Hello from Node.js!'        // Email body
};

// Send email using the transporter
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);   // Print error if sending fails
  } else {
    console.log('Email sent:', info.response);  // Print success message
  }
});
