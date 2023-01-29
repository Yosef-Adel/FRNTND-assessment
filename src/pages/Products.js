import React from 'react'
import { useState, useEffect } from 'react'
import res from '../data/res.json'
import Product from '../components/Product';
const Products = () => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        // here you can fetch data from API
        setData(res.mvPurchaseOrders)
    }, [])
    return (
    <div>
        <h1 className='title'>Product List</h1>
        {
            data.map(item => (
                <Product  
                key = {item.PurchaseOrderId} 
                product = {item} />
            ))
        }
    </div>
  )
}

export default Products