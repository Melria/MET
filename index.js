// const express = require('express');
// const app = express();
// const nodemailer = require('nodemailer');
import express from 'express'
import cors from 'cors';
import nodemailer from 'nodemailer'

const app = express();
app.use(express.json());
app.use(cors())

app.post('/api/send-email', (req, res) => {
    const { name, email, theme, message } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // or 'STARTTLS'
        auth: {
            user: 'meligloria0@gmail.com',
            pass: 'snvhifmvfdkhwgev'
        }
    });

    const mailOptions = {
        from: email,
        to: 'meligloria0@gmail.com',
        subject: theme,
        text: `Name: ${name}\nEmail: ${email}\nTheme: ${theme}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.json({ success: false, error: error.message });
        } else {
            return res.json({ success: true });
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
