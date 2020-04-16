class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    async getProducts() {
        const products = await this.productRepository.getAllProducts();

        return products;
    }

    async getProductById(id) {
        const product = await this.productRepository.getProduct(id);

        return product;
    }
}

module.exports = ProductService;