import React from 'react'

export default function Basket({cartItems, onAdd, onRemove}) {
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    return <aside className="block col-1">
        <h2>Cart Item</h2>
        <div>
            {cartItems.length === 0 && <div>Cart Is Empty</div>}
        </div>
        {cartItems.map((item) => (
            <div key={item.id} className="row">
                <div className="col-2">{item.name}</div>
                <div className="col-2">
                    <button onClick={()=>onAdd(item)} className="add">+</button>
                    <button onClick={()=>onRemove(item)} className="remove">-</button>
                </div>
                <div className="col-2 text-right">
                    {item.qty} x ${new Intl.NumberFormat().format(item.price.toFixed(2))}
                </div>
            </div>
        ))}
        {cartItems.length !== 0 && (
            <>
            <hr></hr>
            <div className="row">
                <div className="col-2">Total yearly operation and service cost:</div>
                <div className="col-1 text-right">${new Intl.NumberFormat().format(itemsPrice.toFixed(2))}</div>
            </div>
            <div className="row">
                This price accounts for {(itemsPrice/888000000000).toFixed(2)}% of the $888 billion US military budget
            </div>
            </>
        )}
    </aside>
}