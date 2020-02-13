export const CONFIG = {
  api: 'http://localhost:3006',
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