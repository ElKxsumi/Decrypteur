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

console.log('             ╔════════════════════════════════════════════════════════════════════════════════════════════════╗')
console.log('             ║                                                                                                ║')
console.log('             ║  .S_sSSs      sSSs    sSSs   .S_sSSs     .S S.    .S_sSSs    sdSS_SSSSSSbs    sSSs   .S_sSSs   ║')
console.log('             ║ .SS~YS%%b    d%%SP   d%%SP  .SS~YS%%b   .SS SS.  .SS~YS%%b   YSSS~S%SSSSSP   d%%SP  .SS~YS%%b  ║')
console.log("             ║ S%S   `S%b  d%S'    d%S'    S%S   `S%b  S%S S%S  S%S   `S%b       S%S       d%S'    S%S   `S%b ║")
console.log('             ║ S%S    S%S  S%S     S%S     S%S    S%S  S%S S%S  S%S    S%S       S%S       S%S     S%S    S%S ║')
console.log('             ║ S%S    S&S  S&S     S&S     S%S    d*S  S%S S%S  S%S    d*S       S&S       S&S     S%S    d*S ║')
console.log('             ║ S&S    S&S  S&S_Ss  S&S     S&S   .S*S   SS SS   S&S   .S*S       S&S       S&S_Ss  S&S   .S*S ║')
console.log('             ║ S&S    S&S  S&S~SP  S&S     S&S_sdSSS     S S    S&S_sdSSS        S&S       S&S~SP  S&S_sdSSS  ║')
console.log('             ║ S&S    S&S  S&S     S&S     S&S~YSY%b     SSS    S&S~YSSY         S&S       S&S     S&S~YSY%b  ║')
console.log('             ║ S*S    d*S  S*b     S*b     S*S   `S%b    S*S    S*S              S*S       S*b     S*S   `S%b ║')
console.log('             ║ S*S   .S*S  S*S.    S*S.    S*S    S%S    S*S    S*S              S*S       S*S.    S*S    S%S ║')
console.log('             ║ S*S_sdSSS    SSSbs   SSSbs  S*S    S&S    S*S    S*S              S*S        SSSbs  S*S    S&S ║')
console.log('             ║ SSS~YSSY      YSSP    YSSP  S*S    SSS    S*S    S*S              S*S         YSSP  S*S    SSS ║')
console.log('             ║                             SP            SP     SP               SP                SP         ║')
console.log('             ║                             Y             Y      Y                Y                 Y          ║')
console.log('             ║                                                                                                ║')
console.log('             ╚════════════════════════════════════════════════════════════════════════════════════════════════╝\n\n')

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





