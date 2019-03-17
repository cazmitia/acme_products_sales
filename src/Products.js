import React from 'react'

const Products = ({deleteProduct, products}) => {
    return (
        <ul className="list-group">
            {products.map(product => (
                <li key={product.id} className="list-group-item">
                    {product.name}
                    <div>
                        ${product.sale === 0 ? product.price : <del>{product.price}</del> }
                    </div>
                    <div style={{marginBottom: 5}} >
                        {product.sale === 0 ? <span /> : <span className="badge badge-success" >${(product.price / 100) * (100 - product.sale)}</span>}
                    </div>
                    <div className={product.stock === 'instock' ? 'badge badge-success' : 'badge badge-warning'}>
                        {product.stock}
                    </div>
                    <br />
                    <button type="button" style={{marginTop: 5}} className="btn btn-danger btn-sm" onClick={() => deleteProduct(product.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}

export default Products
