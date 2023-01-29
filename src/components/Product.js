import React from 'react'
import { useState } from 'react'
import ProductDetails from './ProductDetails'
import classes from './style/Product.module.css'
const Product = ({product}) => {
    const [modalIsShown, setModalIsShown] = useState(false);
    const showModalHandeler = ()=>{
        setModalIsShown(true);
    }
    const closeModalHandeler = ()=>{
        setModalIsShown(false);
    }
  return (
    <div>
       { modalIsShown &&  <ProductDetails product={product} onCloseModal= {closeModalHandeler}/>}
       <div className={classes.product}>
        <h2  >
              {product.PurchaseOrderTypeAbbreviation} - {product.PurchaseOrderNo}
        </h2>
        <button onClick={showModalHandeler}>View</button>
       </div>
    </div>
  )
}

export default Product
