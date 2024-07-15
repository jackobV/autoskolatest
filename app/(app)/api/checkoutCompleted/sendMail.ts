import postmark from 'postmark';
// @ts-ignore
const postmarkClient = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN);

// @ts-ignore
export default async function sendEmail({ to, from, subject, message }) {
    const emailData = {
        From: from,
        To: to,
        Subject: subject,
        HtmlBody: message,
    };

    try {
        const result = await postmarkClient.sendEmail(emailData);
        console.log('Email sent successfully!');
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}

		
    