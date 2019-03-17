import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import axios from 'axios'
import Products from './Products'
import Navbar from './Nav'
import CreateProduct from './CreateProduct'

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    getData = () => {
        axios.get('/api/products')
        .then(response => response.data)
        .then(products => this.setState({products}))
    }

    deleteProduct = (id) => {
        axios.delete(`/api/products/${id}`)
        .then(() => this.getData())
    }

    async componentDidMount() {
        await this.getData();
    }

    render () {
        const products = this.state.products;
        return (
            <HashRouter>
                <h1>Acme Products/Sales</h1>
                <Navbar products={products.length} sales={products.filter(product => product.sale !== 0).length} />
                <Route exact path="/" render={() => 'Welcome!!'} />
                <Route exact path="/products" render={(() => <Products deleteProduct={this.deleteProduct} products={products} />)} />
                <Route path="/products/sales" render={(() => <Products deleteProduct={this.deleteProduct} products={products.filter(product => product.sale !== 0)} />)} />
                <Route path="/products/createProduct" render={(({history}) => <CreateProduct getData={this.getData} history={history} />)} />
            </HashRouter>
        )
    }
}
