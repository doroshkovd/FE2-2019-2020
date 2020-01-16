const MyModule = ((function () {
  const privateVar = 'Hello World';
  function privateMethod() {
    console.log(privateVar);
  }
  return {
    publicMethod() {
      privateMethod();
    },
  };
})());

const MyModule2 = ((function () {
  const privateVar = 'Hello World';
  function privateMethod() {
    console.log(privateVar);
  }
  return {
    publicMethod() {
      privateMethod();
    },
  };
})());
