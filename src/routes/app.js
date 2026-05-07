const express = require('express');
const {encrypt} = require('../crypt/cryptography');
const {storeEncryptedMessage, getEncryptedMessage}  = require('../store/store');
const app = express();
const port = 8080;

app.use(express.json());

// define route for encryption
app.post('/encrypt', (req, res) => {
    try {
        const encryptedMessage = encrypt(req.body.text);
        // const encryptedMessage = "Prova";
        const id = storeEncryptedMessage(encryptedMessage);
        res.status(200).json({ message: "We are encrypted your message. The id for this message is: ", id});

    } catch (error) {
        res.status(404).json({ message: "We have encounter an error", error: error.message });
    }
})

// define route for decryption
app.get('/decrypt/:id', (req, res) => {
    try {
        decryptedMessage = getEncryptedMessage(req.params.id);
        res.status(200).json({ decrypted: decryptedMessage })
    } catch (error) {
        res.status(404).json({ message: "We have encounter an error", error: error.message });
    }
})

// start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});