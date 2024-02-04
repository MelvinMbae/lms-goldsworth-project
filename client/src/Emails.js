// // emailSender.js
// const AWS = require('aws-sdk');
// const ses = new AWS.SES();

// exports.handler = async (event) => {
//   const { subject, message } = JSON.parse(event.body);

//   const params = {
//     Destination: {
//       ToAddresses: ['student1@example.com', 'student2@example.com'], // Replace with actual student email addresses
//     },
//     Message: {
//       Body: {
//         Text: { Data: message },
//       },
//       Subject: { Data: subject },
//     },
//     Source: 'teacher@example.com', // Replace with actual teacher email address
//   };

//   try {
//     const result = await ses.sendEmail(params).promise();
//     console.log('Email sent:', result);
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: 'Email sent successfully' }),
//     };
//   } catch (error) {
//     console.error('Error sending email:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: 'Failed to send email' }),
//     };
//   }
// };