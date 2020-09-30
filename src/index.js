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

function decode(expr) {
    let letterArr = [];
    let resultArr = [];
    for (let i = 0; i <= expr.length - 1; i += 10) {
      letterArr.push(expr.slice(i, i + 10))
    }

    for (let j = 0; j <= letterArr.length - 1; j += 1) {
      let str = '';
      for (let k = 0; k < 9; k += 1) {
        if (`${letterArr[j][k]}${letterArr[j][k + 1]}` === '00') {
          k += 1;
        } else if (`${letterArr[j][k]}${letterArr[j][k + 1]}` === '10') {
          str += '.';
          k += 1;
        } else if (`${letterArr[j][k]}${letterArr[j][k + 1]}` === '11') {
          str += '-';
          k += 1;
        } else if (letterArr[j][k] === '*') {
          str = ' ';
          break;
        }
      }
      resultArr.push(str);
    }
    return resultArr.map((item) => {
      if (item !== ' ') {
        return MORSE_TABLE[item];
      } else {
        return ' ';
      }
    }).join('')
}

module.exports = {
    decode
}