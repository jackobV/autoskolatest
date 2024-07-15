const postmark = require("postmark");
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

// @ts-ignore
export default function sendEmail({ to, from, subject, message }) {
    const emailData = {
        From: from,
        To: to,
        Subject: subject,
        HtmlBody: message,
    };
        postmarkClient.sendEmail(emailData);
        console.log('Email sent successfully!');
}
