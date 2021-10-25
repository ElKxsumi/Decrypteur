const base64 = require('base-64');
const utf8 = require('utf8');
const morse = require('morse-code-converter');
const binary = require("decode-encode-binary")
const { read } = require('fs');
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
const { encode, decode } = require('hex-encode-decode')
const md5 = require('md5')
var ReverseMd5 = require('reverse-md5')
var rev = ReverseMd5({
    lettersUpper: false,
    lettersLower: true,
    numbers: true,
    special: false,
    whitespace: true,
    maxLen: 12
})

console.log('                     ╔══════════════════════════════════════════════════════════════════════╗')
console.log('                     ║                                                                      ║')
console.log('                     ║   888888b.         d8888  .d8888b.  8888888888 .d8888b.      d8888   ║')
console.log('                     ║   888  "88b       d88888 d88P  Y88b 888       d88P  Y88b    d8P888   ║')
console.log('                     ║   888  .88P      d88P888 Y88b.      888       888          d8P 888   ║')
console.log('                     ║   8888888K.     d88P 888  "Y888b.   8888888   888d888b.   d8P  888   ║')
console.log('                     ║   888  "Y88b   d88P  888     "Y88b. 888       888P "Y88b d88   888   ║')
console.log('                     ║   888    888  d88P   888       "888 888       888    888 8888888888  ║')
console.log('                     ║   888   d88P d8888888888 Y88b  d88P 888       Y88b  d88P       888   ║')
console.log('                     ║   8888888P" d88P     888  "Y8888P"  8888888888 "Y8888P"        888   ║')
console.log('                     ║                                                                      ║')
console.log('                     ╚══════════════════════════════════════════════════════════════════════╝\n\n')

readline.question("\n\nEncode (base64) [1],  Decode (base64) [2].  Encode (morse) [3], Decode (morse) [4]. Encode (binary) [5], Decode (binary) [6]. Encode (hex) [7], Decode (hex) [8]. Encode (md5) [9]\n\n", choose => {
    if (choose == 1) {
        readline.question("Type what you want to encode : ", decode_base64 => {
            var bytes = utf8.encode(decode_base64);
            var encoded = base64.encode(bytes);
            console.log(encoded);
            readline.close();
        })
    } 

    else if (choose == 2) {
        readline.question("Type what you want to decode : ", encoded_base64 => {
            var bytes = base64.decode(encoded_base64);
            var text = utf8.decode(bytes);
            console.log(text);
            readline.close();
        })
    }
    else if(choose == 3) {
        readline.question("Type what you want to encode : ", encode_morse => {
            const code = morse.textToMorse(encode_morse)
            console.log(code)
            readline.close();
        })
    }
    else if(choose == 4) {
        readline.question("Type what you want to decode : ", decode_morse => {
            const text = morse.morseToText(decode_morse)
            console.log(text)
            readline.close();
        })
    }
    else if(choose == 5) {
        readline.question("Type what you want to encode :", encode_binary => {
            var binary_encode = binary.encode(encode_binary)
            console.log(binary_encode)
            readline.close();
        })
    }
    else if(choose == 6) {
        readline.question("Type what you want to decode : ", decode_binary => {
            var binary_decode = binary.decode(decode_binary)
            console.log(binary_decode)
            readline.close();
        })
    }
    else if(choose == 7) {
        readline.question("Type what you want to encode : ", encode_hex => {
            console.log(encode(encode_hex))
            readline.close();
        })
    }
    else if(choose == 8) {
        readline.question("Type what you want to decode : ", decode_hex => {
            console.log(decode(decode_hex))
            readline.close();
        })
    }
    else if(choose == 9) {
        readline.question("Type what you want to encode : ", encode_md5 => {
            console.log(md5(encode_md5))
            readline.close();
        })
    }
})





