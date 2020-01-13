// const reg = /abc/gi;
// const reg2 = new RegExp('abc');

// function replaceTest() {
//   const reg = /(\d) (\d+)/g;
//   let str = '1 222222';
//   str = str.replace(reg, '$2 before $1');
//   console.log(str);
// }

// +375 (44) 3334444
// function isPhoneNumber(phoneNumber) {
//   const reg = /^\+375\s\((?:29|44|33|25)\)\s[1-9]\d{6}$/;
//   return reg.test(phoneNumber);
// }
//
// console.log(isPhoneNumber('+375 (44) 12345671111'));

// const reg = /\da/g;
// const str = '1a 2a 3a';
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));
//
// function isValidIP(ip) {
//   const reg = /(^[1-9]\d{0,2})\.(0|[1-9]\d{0,2})\.(0|[1-9]\d{0,2})\.(0|[1-9]\d{0,2})$/;
//   const test = reg.test(ip);
//   const matches = ip.match(reg);
//   console.log(matches);
//   return test && matches[1] < 255 && matches[2] < 255 && matches[3] < 255 &&
//     matches[4] < 255;
// }
//
// console.log(isValidIP('10.255.8.8'));

function braces(str) {
  const open = ['(', '[', '{'];
  const close = [')', ']', '}'];
  const opens = [];

  for (let i = 0; i <= str.length; i++) {
    if (open.indexOf(str[i]) !== -1) {
      opens.push(open.indexOf(str[i]));
    }

    if (close.indexOf(str[i]) !== -1) {
      let closeOne = close.indexOf(str[i]);

      if (opens[opens.length - 1] !== close[closeOne] || opens.length === 0) {
        return false;
      }

      opens.pop();
    }

    return opens.length === 0;
  }
}

const bracerR = s => {
  s = s.replace(/[^\(\)\[\]\{\}]/g, '');
  while (/\(\)|\[\]|\{\}/.test(s)) {
    s = s.replace(/\(\)|\[\]|\{\}/g, '');
  }
  return s.length < 1;
}

console.log(bracerR('()[]{}'));
console.log(braces('()[]{}'));


console.log(bracerR('(awda)})[awdawd]{}'));
console.log(braces('(awda)})[awdawd]{}'));
