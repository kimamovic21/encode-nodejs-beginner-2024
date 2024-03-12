import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { 
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    },
});

export const sendEmail = async (req, res) => {
    try {
        const { to, subject, html, text} = req.body;
        const mailOptions = {
            from: '"Encode Test 👻" <encode.development24@gmail.com>', 
            to: to.join(),
            subject,
        };
    
        if (text) {
            mailOptions.text = text;
        };
        if (html) {
            mailOptions.html = html;
        };
    
        const info = await transporter.sendMail(mailOptions);
    
        console.log(info);
    
        res.send(`Email sent successfully to: ${info?.accepted?.join()}`);
        
    } catch (error) {
        res.status(500).send('Could not send email');
    };
};
