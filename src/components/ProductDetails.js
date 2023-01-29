import React from 'react'
import Modal from '../UI/Modal'
import classes from './style/ProductDetails.module.css'
const ProductDetails = ({product, onCloseModal}) => {
    console.log(product)
  return (
     <Modal onCloseModal = {onCloseModal}>
        <div className={classes.container}>
        <div className={classes.btn}><button onClick={onCloseModal}>X</button></div>
        <h3>Purchase Order Address: <span>{product.PurchaseOrderAddress}</span> </h3> 
        <h3>Purchase Order Contact Person: <span>{product.PurchaseOrderContactPerson}</span> </h3> 
        <h3>Purchase Order Status: <span>{product.PurchaseOrderStatus}</span> </h3> 
        <h3>Purchase Order Details: </h3>
        <table className={classes.contentTable}>
            <thead>
                <tr>
                <th>Product SKU</th>
                <th>Quantity Ordered</th>
                <th>Unit Price</th>
                <th>Total Amount</th>
                </tr>
            </thead>
            <tbody>
                {product.PurchaseOrderDetails.map((detail, index) => (
                <tr key={index}>
                    <td>{detail.PurchaseOrderRowProductSKU}</td>
                    <td>{detail.PurchaseOrderRowQuantity}</td>
                    <td>{detail.PurchaseOrderRowUnitPriceWithoutTaxOrDiscount}</td>
                    <td>{detail.PurchaseOrderRowTotalAmount}</td>
                </tr>
                ))}
            </tbody>
        </table>

        
        </div>

    </Modal>

  )
}

export default ProductDetails