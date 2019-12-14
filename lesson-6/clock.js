const clock = document.getElementById('clock');
moment.locale('en');
// console.log(moment().format());

function timeChanger() {
  let d = moment().format('hh:mm:ss A');
  clock.innerHTML = d;
}

setInterval(timeChanger, 1000);

let notes = [];
if (localStorage.getItem('notes')) {
  notes = localStorage.getItem('notes');
}

localStorage.setItem('key', 'value')
sessionStorage.setItem('key', 'value')







