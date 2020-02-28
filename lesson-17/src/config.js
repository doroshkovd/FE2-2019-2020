export const CONFIG = {
  api: 'https://my-json-server.typicode.com/doroshkovd/FE2-2019-2020',
  selectors: {
    mainContentPages: '.main-content .page',
    homePage: '.all-products',
    productsListItems: '.all-products .products-list > li',
    productsList: '.all-products .products-list',
    productTemplate: '#products-template',
    singlePage: '.single-product',
    singlePageContent: '.preview-large',
    errorPage: '.error',
    loginPage: '.login',
    checkbox: '.all-products input[type=checkbox]',
  },
  hidden: 'hidden',
  visible: 'visible',
  filterOptions: ['manufacturer', 'storage', 'os', 'camera'],
};
