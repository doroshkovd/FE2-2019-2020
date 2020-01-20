const form = document.forms[0];
const img = document.getElementById('image-file');
const loadBtn = document.getElementById('load-btn');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const file = new FileReader();
  const selectedFile = img.files[0];

  file.onload = () => {
    saveImage(file.result);
  };

  file.readAsDataURL(selectedFile);
});

loadBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getImages();
});

function saveImage(image) {
  fetch('http://localhost:3006/images', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({src: image}),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    });
}

function renderImages(images) {
  images.forEach((item) => {
    const img = new Image();
    img.src = item.src;
    img.onload = () => {
      document.body.append(img);
    };
  });
}

function getImages() {
  fetch('http://localhost:3006/images')
    .then((res) => res.json())
    .then((images) => {
      renderImages(images);
    });
}