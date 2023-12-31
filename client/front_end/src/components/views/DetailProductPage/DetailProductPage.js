import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Row, Col} from 'antd'; 
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import './DetailProduct.css';


function DetailProductPage(props) {
    const [Product, setProduct] = useState([])
    const dispatch = useDispatch();
    const productId = props.match.params.productId
    
  
    useEffect(() => {
        Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
    }, []) 

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId)) 
    }

  return (
    <div className="postPage">
      <div className='productTitleDiv'>
        <h1>{Product.title}</h1>
      </div>

      <br />

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
            <ProductImage detail={Product} />
        </Col>
        <Col lg={12} xs={24}>
            <ProductInfo 
            addToCart={addToCartHandler} 
            detail={Product} />
        </Col>
      </Row> 
    </div>
  )
}

export default DetailProductPage
