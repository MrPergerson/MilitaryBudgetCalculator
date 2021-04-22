import React from 'react'
import Product from './Product';

export default function Main(props) {
    const {products, onAdd} = props;
    return <main className="block col-2">
        <h2>Military Products</h2>
        
            {products.map((product) => (
                <div className="product-row">
                    <div>
                        <img className="product-image" style={{backgroundImage: 'url('+product.image+')'}}></img>
                        <div>
                            <button onClick={()=>onAdd(product)}>Add To Cart</button>
                        </div>
                        
                    </div>
                    <div>
                        <h3>{product.name}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis adipisci nobis fugit rem qui atque distinctio corporis modi dolore, autem repellendus quam labore laboriosam, aliquid minus optio voluptate molestias!</p>
                        <div>${product.price}</div>
                    </div>
                </div>
            ))}
        
        
    </main>
}