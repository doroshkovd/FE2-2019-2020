const label = document.getElementById('labelForCh3');
const ch = document.getElementById('ch3');

label.addEventListener('click', () => {
  label.classList.toggle('checked-label')
  setTimeout(() => {
    console.log(ch.checked)
  })
});