const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const DECODE = {
    '11': '-',
    '10': '.',
    '00': ''
}

const SPACE = '**********';

function decodeLetter(letter) {
    const morseLetter = letter.match(/.{1,2}/g).map((pair) => {
        return DECODE[pair]
    }).join('');

    return MORSE_TABLE[morseLetter];
}

function decode(expr) {
    return expr.match(/.{1,10}/g).map((letter) => {
        return letter === SPACE ? ' ' : decodeLetter(letter);
    }).join('')
}

module.exports = {
    decode
}
