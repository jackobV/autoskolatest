const postmark = require("postmark");
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
        // @ts-ignore
        if (error.code === 'EMFILE') {
            console.error('Too many open files:', error);
            // Implement a retry mechanism with delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return sendEmail({ to, from, subject, message });
        } else { // @ts-ignore
            if (error.code === 'ENETUNREACH') {
                        console.error('Network unreachable:', error);
                        // Retry or handle network error appropriately
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        return sendEmail({ to, from, subject, message });
                    } else {
                        console.error('Error sending email:', error);
                        throw error;
                    }
        }
    }
}
