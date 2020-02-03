setTimeout(() => {
  history.pushState(null, null, '/some/url/without/state');
  history.replaceState(null, null, '/replace/state');
}, 2000);


setTimeout(() => {
  history.back();
}, 3000);

