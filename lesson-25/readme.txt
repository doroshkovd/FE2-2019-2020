https://github.com/coreybutler/nvm-windows
https://www.mongodb.com/download-center
https://robomongo.org/download

1. Init в BE
2. install --save express

3.
const http = require('http');

const port = 3006;

const server = http.createServer();

server.listen(port);

4.
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    message: 'Hello world'
  })
});

module.exports = app;

5. Добавляем app в сервер

6. Создаем API -> routes
7. Добавляем перввый роут и мидлварь для обработки /products

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    msg: 'Products route',
  });
});

module.exports = router;

app.use('/products', productRoutes);

8. добавить PUT, DELETE, POST, GET by id сделать products массив

9. На пост добавить
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

10.
npm install nodemon

11. add start in package.json
12. add morgan
app.use(morgan('dev'));
13. add errors
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
});

14. add CORS headers

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET, HEAD');
    return res.status(200).json({});
  }
  next();
});

15. npm instal --save mongoose
16. Создаем схему для продуктов
const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
  name:  String, // String is shorthand for {type: String}
  price: String,
  description: String,
});

17. Добавляем модель
const productsSchema = require('../models/product');
const Product = mongoose.model('Product', productsSchema);

18. Переписываем Post get

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const productsSchema = require('../models/product');
const Product = mongoose.model('Product', productsSchema);

router.get('/', async (req, res) => {
  const products = await Product.find();
  res.status(200).json({
    msg: 'GET all products',
    result: products,
  });
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const product = await Product.findOne({_id: id});
  res.status(200).json({
    msg: 'GET product',
    result: product,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = new Product({
    name: body.name,
    price: body.price,
    description: body.description,
  });

  product.save()
    .then((prod) => {
      res.status(200).json({
        msg: 'Products was added now',
        result: prod
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: 'Error',
        result: err
      });
    })
});

module.exports = router;

