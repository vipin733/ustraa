import React from 'react'
import ProductCard from './product_card'

const Index  = ({products}) => {
    return (
        <div className="products-lists">
            {
                products.map((product, index) => {
                    return <ProductCard key={index} product={product}/>
                })
            }
        </div>
    )
}

export default  Index