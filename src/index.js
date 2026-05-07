const readline = require('readline');
const { encrypt, decrypt } = require('./crypt/cryptography');

// read text from terminal, encrypt it and show  encrypted decrypted text
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Insert some text you want to encrypt: ", (input) => {
    
    const encrypted = encrypt(input);
    console.log("\nEncrypted:");
    console.log(encrypted);

    const decrypted = decrypt(encrypted);
    console.log("\nDecrypted:");
    console.log(decrypted);

    rl.close(); // important! clode read line
});