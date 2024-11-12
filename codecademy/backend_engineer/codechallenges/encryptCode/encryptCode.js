// Write class below
class ShiftCipher {
    constructor(shift) {
        this._shift = shift;
    }
    get shift() {
        return this._shift;
    }
    encrypt(msg) {
        if (typeof msg === "string") {
            let index = 0;
            let encryptedMsg = "";
            let encryptCode = 0;
            let encryptedChar = ""; // There is no Char datatype in JS. It is stored as a string.
            for (let char of msg) {
                if (char.match(/[a-zA-Z]/)) {
                    encryptCode = msg.charCodeAt(index) + this._shift;
                    switch (true) {
                        case (encryptCode > 90 && encryptCode < 97):
                            encryptCode = 97;
                            break;
                        case (encryptCode > 122):
                            encryptCode -= 122;
                            encryptCode = (65 + encryptCode) - 1;
                            break;
                        default:
                            break;
                    }

                    encryptedChar = String.fromCharCode(encryptCode);
                    encryptedMsg += encryptedChar;
                } else {
                    encryptedMsg += char;
                }
                index++;
            }
            console.log(encryptedMsg.toUpperCase());
        } else {
            console.log("Your message is not a String");
            return;
        }
    }
}
/*
const cipher = new ShiftCipher(4);
console.log(cipher.encrypt('I love my code!'));
console.log(cipher.encrypt('i <3 my puppy'));
console.log(cipher.encrypt('Zzzzzz...!'));
*/
