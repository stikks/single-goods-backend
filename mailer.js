var Mailjet = require('node-mailjet').connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
);

var sendEmail = Mailjet.post('send');

module.exports = {
    mailHelper: (sender, subject, recipients, message_text, message_html, attachments) => {
        var emailData = {
            'FromEmail': sender,
            'FromName': process.env.MJ_FROM_NAME,
            'Subject': subject,
            'Text-part': message_text,
            'HTMLPart': message_html,
            'Recipients': recipients.map(function(rec) { return {'Email': rec}}),
            'Attachments': attachments.map(function(att) {
                return {
                    "Content-Type": att.content_type,
                    "Filename": att.filename,
                    "Content": att.content
                }
            })
        }

        sendEmail.request(emailData).then(function(resp) {
            console.log(resp.body);
            return resp.body
        })
        .catch(function(err) {
            console.warn(err);
            throw new Error(err)
        });
    }
}
