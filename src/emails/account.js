const sgMail = require("@sendgrid/mail");
const sendGridAPIKey =
  "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";
sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "phonekham.keomany@gmail.com",
    subject: "test again",
    text: `Welcome to the App, ${name}`
  });
};

module.exports = {
  sendWelcomeEmail
};
