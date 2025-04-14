import { useOutletContext } from 'react-router-dom';

function HomePage() {
  const {productData, handleCartAdd} = useOutletContext();
  
  return (
    <>
    <h1 className='page-heading'>Welcome to GadgetGalaxy</h1>
      <main className='product-grid'>

      {productData.map(product => (
        <div key={product.id} className='product-div'>
          <img className='product-img' src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <div className="add-to-cart-controls">
            <button 
            onClick={() => {
              const quantity = parseInt(document.getElementById(`quantity-${product.id}`).value);
              handleCartAdd(product.id, quantity);

              }} className='addToCart-btn'>Add to Cart</button>
            <input className='add-quantity-input'
            type="number"
            min="1"
            defaultValue="1"
            id={`quantity-${product.id}`}
            />
          </div>

        </div>
      ))}
      </main>      
    </>
  )
}

export default HomePage
