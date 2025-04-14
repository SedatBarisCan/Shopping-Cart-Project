import { useOutletContext } from 'react-router-dom';


function ShoppingCartPage() {

  const {cartData, productData, handleDeleteProduct} = useOutletContext();
  const cartItems = productData.filter(product =>
    cartData.some(cartItem => cartItem.id === product.id)
  ).map(product => {//adds quantity value to cartItems
    const cartItem = cartData.find(item => item.id === product.id);
    return {
      ...product,
      quantity: cartItem.quantity,
    };
  })

  const totalPrice = cartItems.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

    return (
      <main className='shopping-cart-page'>
        <h1 className='page-heading'>Shopping Cart</h1>
        <div className='cart-content'>
          <div className="cart-items">
            {cartItems.map(product => (    
              <div className='product-in-cart-div' key={product.id}>
                <img
                  className='product-in-cart-img'
                  src={product.image}
                  alt={product.title}
                />
                <div className='product-in-cart-description'>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <p><strong>${product.price}</strong></p>
                  <div className='quantity-div'>
                  <p><strong>Quantity: </strong></p>
                  <input className='add-quantity-input'
                  type="number"
                  min="1"
                  defaultValue={product.quantity}
                  id={`quantity-${product.id}`}
                  onChange={() => {
                    const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value);
                    handleDeleteProduct(product.id, quantity)
                  }}
                  />
                  </div>
                  <button onClick={() => handleDeleteProduct(product.id)} className='delete-btn'>Delete</button>
                </div>
              </div>
            ))}
          </div>
        <div className="total-price-box">
          <p>Total Price:</p>
          <h2>${totalPrice.toFixed(2)}</h2>
        </div>
       </div>
    </main>
    )
  }
  
  export default ShoppingCartPage
  