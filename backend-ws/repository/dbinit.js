const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./productsdb');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, shortSpecs TEXT, image TEXT, qty INTEGER, url TEXT)");
    db.run(`INSERT INTO products (name,shortSpecs,image,qty,url) VALUES (?,?,?,?,?)`,
    [
        'Intel Processzor',
        'i7-8750H',
        'https://lh3.googleusercontent.com/proxy/ZLXfCIexIWtX751R6GGeUdwSRzswjYkUlsrGB_1lpf1JxPrtpXfwYE0ohq2p5DjerYK2W62x2fUU1YV_R2Q2jilW03ovD0mDrF_3YOqE17vPPiBiQQ9c35ni0uQKOL5xsc0T6Z1kreM',
        20,
        'http://localhost:3050/product/1'
    ]);
    db.run(`INSERT INTO products (name,shortSpecs,image,qty,url) VALUES (?,?,?,?,?)`,
    [
        'AMD Processzor',
        'Ryzen 5',
        'https://cdn.alza.hu/ImgW.ashx?fd=f3&cd=BD740h11',
        30,
        'http://localhost:3050/product/2'
    ]);
    db.run(`INSERT INTO products (name,shortSpecs,image,qty,url) VALUES (?,?,?,?,?)`,
    [
        'nVidia Videókártya',
        'GTX 1050Ti 4GB',
        'https://p1.akcdn.net/full/416687757.gigabyte-geforce-gtx-1050-ti-oc-4gb-gddr5-128bit-pcie-gv-n105toc-4gd.jpg',
        3,
        'http://localhost:3050/product/3'
    ]);

})