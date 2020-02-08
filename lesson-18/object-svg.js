// const obj = document.getElementById('object');
//
// obj.addEventListener('load', () => {
//    const svgDocument = obj.contentDocument;
//
//    const el = svgDocument.querySelector('.segment');
//
//    el.addEventListener('click',(event) => {
//        console.log(event.target);
//    });
// });

document.getElementById('IMalanka')
.addEventListener('mouseover', (event) => {
    event.target.style.fill = 'green';
});

document.getElementById('IMalanka')
  .addEventListener('mouseleave', (event) => {
      event.target.style.fill = 'black';
  });