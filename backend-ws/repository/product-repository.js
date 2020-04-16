const Product = require('../domain/product');
const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database(__dirname+'/productsdb');


class ProductRepository {

    async getAllProducts() {
        return new Promise((resolve,reject) => {
            db.serialize(function() {
                db.all("SELECT * FROM products", function(err,products){
                    if( err !== null) {
                        console.log(err.toString());
                        reject(err);
                        return;
                    }
                    const everyProduct = products.map(product => {
                        return new Product(product.id,product.name,product.shortSpecs,product.image,product.qty,product.url);
                    })

                    resolve(everyProduct);
                })
            })
        })
    }

    async getProduct(id) {
        return new Promise((resolve,reject) => {
            db.serialize(function() {
                db.get('SELECT * FROM products WHERE products.id = ?',id, function(err,product){
                    if(err !== null) {
                        console.log(err.toString());
                        reject(err);
                        return;
                    }
                    const choosedProduct = new Product(product.id,product.name,product.shortSpecs,product.image,product.qty,product.url);

                    resolve(choosedProduct);
                })
            })
        })
    }

}

module.exports = ProductRepository;