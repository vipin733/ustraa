import React from 'react'
const Index = ({product}) =>{
    return (
        
        <React.Fragment>
           
            <div className="pro-item">
            
            <img className="pro-img" src={product.image_urls.x300} alt={product.name}/>
            <div className="right-content">
                <div className="pro-title">{product.name}  {product.rating ? <span>{product.rating}*</span> : ''}</div> 
                {product.weight > 0? <p>({product.weight} {product.weight_unit})</p> : ''}
                <div className="price">
                    <span className="actual-price">₹ {product.final_price}</span>
                    <span className="prev-price">₹ {product.price}</span>
                </div>
                <a href="" className="cart-btn" 
                    style={{backgroundColor: product.is_in_stock ? '#4fcf64' : 'grey'}}>
                    {product.is_in_stock ? 'Add to cart' : 'Out of Stock'}
                </a>
            </div>
        </div>
        </React.Fragment>
    
    )
} 

export default  Index
