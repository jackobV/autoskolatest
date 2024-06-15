export default async function SendMail({recipient}: {recipient: string}) {
    var postmark = require("postmark");
    var client = new postmark.ServerClient("18f5196c-1374-424f-b386-e6d171f300e7");
    client.sendEmail({
        "From": "jakubzaloha@na-zkousku.cz",
        "To": recipient,
        "Subject": "Děkujeme za zakoupení autoskolatest.cz",
        "HtmlBody": "<strong>Děkujeme!</strong> Neváhejte se na nás kdykoliv obrátít!.",
        "TextBody": "Děkujeme! Neváhejte se na nás kdykoliv obrátít!",
        "MessageStream": "outbound"
    });
    return ("ok")
}