// https://jsfiddle.net/doroshkovd/17xgrwfb/77/

const Cart = ((function () {
  const CART_LABEL = 'cart';

  const initCart = () => {
    if (localStorage.getItem(CART_LABEL)) {
      return JSON.parse(localStorage.getItem(CART_LABEL));
    }

    return [];
  };

  let cart = initCart();

  const saveData = (data) => {
    cart = [...data];
    localStorage.setItem(CART_LABEL, JSON.stringify(cart));
  };

  const addProduct = (product) => {
    if (cart.includes(product)) {
      return {
        done: false,
        error: 'The product is exist in cart',
      };
    }

    saveData([...cart, product]);
    return {
      done: true,
    };
  };

  const removeProduct = (product) => {
    const filtredCart = cart.filter((item) => item !== product);
    if (filtredCart.length === cart.length) {
      return {
        done: false,
        error: 'Element doesn\'t exist',
      };
    }
    saveData(filtredCart);
    return { done: true };
  };

  return {
    getCart() {
      return cart;
    },
    addItem(item) {
      return addProduct(item);
    },
    removeItem(item) {
      return removeProduct(item);
    },
  };
})());

const STYLES = {
  show: 'show',
};

const UI = {
  cartValue: document.getElementById('cart-value'),
  addProduct: document.getElementById('add-product'),
  removeProduct: document.getElementById('remove-product'),
  errorMessage: document.getElementById('error-message'),
  list: document.getElementById('list'),
  renderCart() {
    this.clearCart();
    Cart.getCart().forEach((item) => {
      const li = document.createElement('li');
      li.innerText = item;
      this.list.append(li);
    });
  },
  clearCart() {
    this.list.innerText = '';
  },
  handleCartResponse(result) {
    if (result.done) {
      this.cartValue.value = '';
      this.errorMessage.classList.remove(STYLES.show);
      this.renderCart();
    } else {
      this.errorMessage.innerText = result.error;
      this.errorMessage.classList.add(STYLES.show);
    }
  },
};

UI.addProduct.addEventListener('click', (event) => {
  event.preventDefault();
  const result = Cart.addItem(UI.cartValue.value);
  UI.handleCartResponse(result);
});

UI.removeProduct.addEventListener('click', (event) => {
  event.preventDefault();
  const result = Cart.removeItem(UI.cartValue.value);
  UI.handleCartResponse(result);
});

UI.renderCart();
