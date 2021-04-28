import React from 'react'
import Product from './Product';


export default function Main(props) {
    const {products, onAdd} = props;
    return <main className="block col-2">
        <h2>Military Units</h2>
        
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
                        <p>{product.description}</p>
                        <div>Yearly operation and service price: ${new Intl.NumberFormat().format(product.price)}</div>
                    </div>
                </div>
            ))}
        
        
    </main>
}