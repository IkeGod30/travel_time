import React from 'react'
import './CartPage.css';

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if (images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }

    }

    const renderItems = () => { 
        return Array.isArray(props.products) && props.products.map(product => {
            return (
            <tr key={product._id}>
                <td>
                    <img className='productImg' alt="product" src={renderCartImage(product.images)} />
                </td>
                <td>{product.quantity} EA</td>
                <td>$ {product.price}</td>
                <td><button className='btn btn-outline-danger' 
                onClick={() => props.removeItem(product._id) }
                >Remove</button></td>
            </tr>)
      
        })
    }
  return (
    <div>
      <table>
        <thead>
            <tr>
                <th>Product Image</th>
                <th>Product Quantity</th>
                <th>Product Price</th>
                <th>Remove from Cart</th>
            </tr>
        </thead>
        <tbody>
            {renderItems()} 
        </tbody>
      </table>
    </div>
  )
}

export default UserCardBlock
