// src/components/EmailSender.js
import axios from 'axios';
import React, { useState } from 'react';

const EmailSender = () => {
const [subject, setSubject] = useState('');
const [recipient, setRecipient] = useState('');
const [message, setMessage] = useState('');

const sendEmail = async () => {
    try {
      // To replace with the actual API endpoint
    const response = await axios.post('YOUR_API_ENDPOINT', {
        subject,
        message,
    });

    console.log('Email sent successfully:', response.data);
    } catch (error) {
    console.error('Error sending email:', error);
    }
};

return (
    <div className='container'>
    <h2>Send Email</h2>
    <form>
        <label>
        Subject:
        <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
        />
        </label>
        <br />
        <label>
        Recipient
        <textarea
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
        />
        </label>
        <br />
        <div className='Container2'>
        <label>
        <div className='sub-cont'>
        Message
        <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        />
        </div>
        </label>
        </div>
        <div className='btn'>
        <button type="button" onClick={sendEmail}>
        Send
        </button>
        </div>
    </form>
    </div>
);
};

export default EmailSender;