const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./productsdb');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, shortSpecs TEXT, image TEXT, qty INTEGER, price INTEGER)");
    db.run(`INSERT INTO products (name,shortSpecs,image,qty,price) VALUES (?,?,?,?,?)`,
    [
        'Intel Processzor',
        'i7-8750H',
        '/images/product_1/intel.jpg',
        20,
        5999
    ]);
    db.run(`INSERT INTO products (name,shortSpecs,image,qty,price) VALUES (?,?,?,?,?)`,
    [
        'AMD Processzor',
        'Ryzen 5',
        '/images/product_2/amd.jpg,/images/product_2/amd2.jpg',
        30,
        7589
    ]);
    db.run(`INSERT INTO products (name,shortSpecs,image,qty,price) VALUES (?,?,?,?,?)`,
    [
        'nVidia Videókártya',
        'GTX 1050Ti 4GB',
        '/images/product_3/nvidia.jpg',
        3,
        96456
    ]);

})