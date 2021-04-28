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
                This price accounts for {(itemsPrice/730_000_000_000).toFixed(2)}% of the $730 billion US military budget
            </div>

            </>
        )}
            <div className="row">
            </div>
            <div className="row">
            This calculator is an informative tool for anyone to understand cost and purpose of various U.S. military vehicles, ships, and personnel. This site contains the main land brigades and the air and sea units of the military. Prices and units are based on the Congress Budget Office’s Interactive Force Structure Tool, which allowed users to see how increase or decreasing the US military would affect the budget. In this tool, I made the price and destructive power of these forces more apparent. Furthermore, I compare the user’s calculation with the 2019 total military budget to rise questions about why we have such large budget. Of the 1.38 trillion-dollar federal budget for 2019, 53%, a total of 730 billion dollars, went to the military spending. 
            </div>
    </aside>
}