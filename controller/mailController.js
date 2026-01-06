
import nodemailer from 'nodemailer';

function sendMail(email, password) {

    // // ✅ PUT THE CONSOLE.LOG HERE (INSIDE FUNCTION)
    // console.log("Verification Link:", "http://localhost:3000/vemail/" + email);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rohitparmar0215@gmail.com',
            pass: 'bixnxlsojhdxvsyx'
        }
    });

    let mailOptions = {
        from: 'rohitparmar0215@gmail.com',
        to: email,
        subject: 'Verify Your Email Address – MoveShift',
        html: `
      <h1>Welcome to MoveShift!</h1>
      <p>Hello,</p>
      <h2>Thank you for registering with MoveShift. We’re excited to have you on board.</h2>
      <p>To complete your registration and activate your account, please verify your email address by clicking the link below:</p>
      <p>Verify your account:</p>
      <a href="http://localhost:3000/vemail/${email}">Click Here for verify</a>

      <p>
      ⏰ IMPORTANT:
        <p>This verification link is valid for 15 minutes only.
         If the link expires, you will need to request a new verification email.
        </p>
 
         <p>Account Details:
         Email: ${email}
         </p>

         <p>If you did not create an account with MoveShift, please ignore this email. No further action is required.</p>

         Thanks & regards,
         MoveShift Team
         Helping you move smarter
      </p>
    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
}

export default sendMail;
