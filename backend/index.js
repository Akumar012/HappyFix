import  dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import twilio from 'twilio';
import fs from 'fs';
const __dirname = path.resolve();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const formDataTemplateId = process.env.FORM_DATA_TEMPLATE_ID;
const confirmationTemplateId = process.env.CONFIRMATION_TEMPLATE_ID;
const cancellationTemplateId = process.env.CANCELLATION_TEMPLATE_ID;

let formData = {
    name: "jeetu",
    email: "jeetu@gamil.com",
    phone: "8905943504",
    address: "jaipur",
    appliance: "Microwave (Commercial)",
    workDetail: "Repairing",
    message: "urgent"
};



app.post('/send-message', (req, res) => {
    const recipient = req.body.to; // Ensure 'to' is coming from the request body
     formData=req.body.formData;
     const constentVariables=JSON.stringify({
        "1": formData.name || "Customer Name",
        "2": formData.email || "name@gmail.com",
        "3": formData.phone || "8764064696",
        "4": formData.address || "617, Chitragupt Nagar 1st, Kidwai Nagar, Tonk Phatak",
        "5": formData.appliance || "Microwave (Commercial)",
        "6": formData.workDetail || "Repairing",
        "7": formData.message || "Customer message here"
     });
    // Check if the 'to' parameter is provided

    if (!recipient) {
        return res.status(400).send('Error: Missing "to" parameter.');
    }
    client.messages
        .create({
            from: 'whatsapp:+14155238886',  // Your Twilio WhatsApp sandbox number
            to: recipient,                  // Recipient's WhatsApp number
            contentSid: formDataTemplateId,
            contentVariables: constentVariables
        })
        .then((message) => {
            console.log('Message SID:', message.sid);
            res.send('Message sent successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            res.status(500).send('Failed to send message.');
        });
});

// Webhook endpoint to handle the response (Confirm/Cancel)
app.post('/webhook', (req, res) => {
    const userResponse = req.body.Body; // User's response (Confirm/Cancel)
    const recipient = req.body.From; // User's WhatsApp number
    const appliance = formData.appliance || "Appliance";
    const workDetail = formData.workDetail || "Work Detail";
    console.log("userResponse", userResponse);
    console.log("recipient", recipient);
    const confirmMsg =
        `✅ *Your request has been confirmed!*
    🔧 Appliance: ${appliance}
    📋 Work Detail: ${workDetail}
    📅 Status: Shaduled
    Our technician will contact you shortly.
    Thanks for choosing Tarantula Webs!`;

    const cancelMsg =
        `❌ *Your request has been canceled!*
    If you have any questions, feel free to reach out to our support team.
    🔧 Appliance: ${appliance}
    📋 Work Detail: ${workDetail}
    📅 Status: Cancled
    If this was an error, please reach out to us at 📞 ${recipient}`;

    if (userResponse === '✓ Confirm Request') {
        console.log("inside confirm");
        const encodedConfirmMsg = encodeURIComponent(confirmMsg);
        client.messages
            .create({
                from: 'whatsapp:+14155238886',  // Your Twilio WhatsApp sandbox number
                to: recipient,                  // Recipient's WhatsApp number
                contentSid: confirmationTemplateId,
                contentVariables: '{"1":"phone=91'+formData.phone+'&text=' + encodedConfirmMsg + '&type=phone_number&app_absent=0"}'
            })
            .then((message) => {
                console.log('Confirmation Message SID:', message.sid);
                res.send('Confirmation message sent successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                res.status(500).send('Failed to send confirmation message.');
            });
    } else if (userResponse  === '✕  Cancel Request') {
        console.log("inside cancel");
        const encodedCancelMsg = encodeURIComponent(cancelMsg);
        client.messages
            .create({
                from: 'whatsapp:+14155238886',  // Your Twilio WhatsApp sandbox number
                to: recipient,                  // Recipient's WhatsApp number
                contentSid: cancellationTemplateId,
                contentVariables: '{"1":"phone=91'+formData.phone+'&text=' + encodedCancelMsg + '&type=phone_number&app_absent=0"}'
            })
            .then((message) => {
                console.log('Cancellation Message SID:', message.sid);
                res.send('Cancellation message sent successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                res.status(500).send('Failed to send cancellation message.');
            });
    } else {
        res.status(400).send('Invalid response. Please reply with "Confirm" or "Cancel".');
    }
});

if (process.env.NODE_ENV === 'production') {

    // try a few likely locations for the frontend build (backend/frontend/build OR ../frontend/build)
    const possibleBuildDirs = [
        path.join(__dirname, 'frontend', 'dist'),
        path.join(__dirname, '..', 'frontend', 'dist'),
        path.join(__dirname, '..', '..', 'frontend', 'dist') // in case of monorepo with 'dist' folder
    ];

    const buildDir = possibleBuildDirs.find(dir => fs.existsSync(path.join(dir, 'index.html')));

    if (!buildDir) {
        console.warn('Frontend build not found. Run `npm run build --prefix frontend` (or from project root: `npm run build`). Checked paths:', possibleBuildDirs);
    } else {
        app.use(express.static(buildDir));
        app.get(/.*/, (req, res) => {
            res.sendFile(path.join(buildDir, 'index.html'));
        });
    }
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});