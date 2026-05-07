const uuid = require('uuid');
const { decrypt } = require('../crypt/cryptography');

let map = new Map();

function storeEncryptedMessage(message){
    const id = uuid.v4() 
    map.set(id, message);
    return id;
}

function getEncryptedMessage(id){
    const encryptedMessage = map.get(id);
    const decryptedMessage = decrypt(encryptedMessage);
    return decryptedMessage;
}

module.exports = {storeEncryptedMessage, getEncryptedMessage}