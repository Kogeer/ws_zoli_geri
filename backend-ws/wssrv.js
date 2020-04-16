const express = require('express');
const ProductController = require('./controller/products-controller');
const ProductService = require('./service/product-service');
const ProductRepository = require('./repository/product-repository');
const cors = require('cors');
const app = express();
const port = 3050;

app.use(cors());
app.use(express.static('public'));

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);


app.get('/products', productController.showProducts.bind(productController));
app.get('/product/:id', productController.getOneProduct.bind(productController));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));