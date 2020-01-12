const xhr = new XMLHttpRequest();

// let url = new URL('https://www.google.com/search');
// url.searchParams.set('q', 'купить мороженое');
// console.log(url);
// console.log(encodeURI('https://www.google.com/search?q=купить мороженое'));
// console.log(decodeURI('https://www.google.com/search?q=%D0%BA%D1%83%D0%BF%D0%B8%D1%82%D1%8C%20%D0%BC%D0%BE%D1%80%D0%BE%D0%B6%D0%B5%D0%BD%D0%BE%D0%B5'));

// const name = document.getElementById('name');
// const secondName = document.getElementById('secondName');

// const url2 = '/';

const wURL ='https://api.darksky.net/forecast/782df41cc8f086cc823109fb02e0cfbd/53.698758,23.829599?lang=ru';
const proxy = 'https://cors-anywhere.herokuapp.com/'
// xhr.setRequestHeader('Content-Type', '');

const formData = new FormData(document.forms.first);

xhr.open('GET', proxy + wURL);

xhr.send();

xhr.responseType = 'json';

xhr.onload = () => {
  if (xhr.status === 200) {
    const result = xhr.response;
    console.log(result);
  }
};
