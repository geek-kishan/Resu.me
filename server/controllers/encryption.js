const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const key = 'abcdefghijklmnopqrstuvwxyzabsdef';
const iv = crypto.randomBytes(16);

module.exports = {
    encrypt: (password)=>{
        let cipher = crypto.createCipheriv(algorithm,key,iv);
        let encrypted = cipher.update(password);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        return `${encrypted.toString('hex')}:${iv.toString('hex')}`;
    },
    decrypt: (password)=>{
        let ivs = password.split(':')[1];
        let iv = Buffer.from(ivs,'hex');
        let encrypteds = password.split(':')[0];
        let encrypted = Buffer.from(encrypteds,'hex');
        let decipher = crypto.createDecipheriv(algorithm,key,iv);
        let decrypted = decipher.update(encrypted);
        decrypted = Buffer.concat([decrypted,decipher.final()]);
        return decrypted.toString();
    }
}