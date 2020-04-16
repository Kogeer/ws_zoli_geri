
class ProductsController {
    constructor(productService) {
        this.productService = productService;
    }

    async showProducts(req,res) {
        const products = await this.productService.getProducts();
        res.send(products);
    }

    async getOneProduct(req,res) {
        const {id} = req.params;
        const product = await this.productService.getProductById(id);
        res.send(product);
    }
}

module.exports = ProductsController;