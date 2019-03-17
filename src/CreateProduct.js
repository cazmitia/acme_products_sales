import React, { Component } from 'react'
import { FormGroup } from 'reactstrap'
import Axios from 'axios';

export default class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: '',
            sale: 0,
            stock: 'instock'
        }
    }

    changeHandler = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    submitForm = (e) => {
        e.preventDefault()
        Axios.post('/api/products', this.state)
        .then(() => this.props.getData())
        .then(() => this.props.history.push(this.state.sale === 0 ? '/products' : '/products/sales'))
    }

    render() {
        const disabled = this.state.name.length === 0 || !this.state.price;
        return (
            <form onSubmit={this.submitForm}>
                <FormGroup label="name" name="name">
                    <label>Name</label>
                    <input className="form-control" name="name" onChange={this.changeHandler} />
                </FormGroup>
                <FormGroup label="price" name="price">
                    <label htmlFor="Price" >Price</label>
                    <input name="price" type="number" min="0" className="form-control" onChange={this.changeHandler} />
                </FormGroup>
                <FormGroup label="sale" name="sale">
                    <label htmlFor="Discount Percentage" >Discount Percentage</label>
                    <input name="sale" type="number" min="0" max="99" className="form-control" onChange={this.changeHandler} />
                </FormGroup>
                <FormGroup label="stock" name="stock">
                    <label htmlFor="Availability" >Availability</label>
                    <select className="form-control" name="stock" onChange={this.changeHandler}>
                        <option>instock</option>
                        <option>backordered</option>
                        <option>discontinued</option>
                    </select>
                </FormGroup>
                <button disabled={disabled} type="submit" className="btn btn-primary">Submit</button>
            </form>
        )
    }
}
