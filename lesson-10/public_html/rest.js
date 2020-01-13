const API = 'http://localhost:3006';

function getPosts() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${API}/posts`);
  xhr.send();

  xhr.responseType = 'json';

  xhr.onload = () => {
    if (xhr.status === 200) {
      renderResponse(xhr.response);
    }
  };
}

function getPost(id) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${API}/posts/${id}`);
  xhr.responseType = 'json';

  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      console.log(xhr.response);
    }

    if (xhr.status === 404) {
      console.log('Not found error');
    }
  };
}

function addPost() {
  const data = getDataFromForm();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', `${API}/posts`);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

  xhr.onload = () => {
    if (xhr.status === 201) {
      console.log('Post was added');
    }
  };
}

function deletePost(id) {
  const xhr = new XMLHttpRequest();
  xhr.open('DELETE', `${API}/posts/${id}`);
  xhr.send();

  xhr.onload = () => {
    console.log(xhr.response);
  };
}

function editPost(id) {
  const data = getDataFromForm();
  const xhr = new XMLHttpRequest();
  xhr.open('PUT', `${API}/posts/${id}`);

  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(data));

  xhr.onload = () => {
    console.log(xhr.response);
  };
}

function getDataFromForm() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const text = document.getElementById('text').value;
  return { title, author, text };
}

function renderResponse(res) {
  res.forEach((post) => {
    const div = document.createElement('div');
    const template = `<h3>${post.title}</h3>
                      <p>${post.text}</p>
                      <span>${post.author}</span><br>
                      <a onclick="editPost(${post.id})">Change post</a>
                      <a onclick="deletePost(${post.id})">Delete post</a>`;
    div.innerHTML = template;
    document.querySelector('body').append(div);
  });
}

// setTimeout(() => {
//   getPost(1);
//   getPost(2);
//   getPost(3);
// }, 5000);
