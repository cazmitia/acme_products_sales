const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/acme_products_sales_db')

const Product = db.define('product', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sale: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0,
        validate: {min: 0, max: 99}
    },
    stock: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const products = [
    {
        name: 'Hat',
        price: 20,
        sale: 15,
        stock: 'instock'
    },
    {
        name: 'Shoes',
        price: 60,
        sale: 0,
        stock: 'instock'
    },
    {
        name: 'Socks',
        price: 8,
        sale: 30,
        stock: 'backordered'
    },
    {
        name: 'Pants',
        price: 40,
        sale: 0,
        stock: 'discontinued'
    },
]

const syncAndSeed = () => {
    return db.sync({ force: true })
    .then(() => {
        Promise.all( products.map(product => Product.create(product)))
    })
}

module.exports = { Product, syncAndSeed }
