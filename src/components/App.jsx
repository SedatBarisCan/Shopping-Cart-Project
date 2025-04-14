import { useEffect, useState } from 'react'
import '../App.css'
import { Link, Outlet } from "react-router-dom";

function App() {

  const [cartData, setCartData] = useState([])


  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  //adds the product to the shopping cart
  function handleCartAdd (id, quantity = 1) {
    //check if its already added
    const existingProduct = cartData.find(product => product.id === id);
    //if it is just increase the quantity
    if (existingProduct) {
      setCartData(cartData.map(product => 
        product.id === id ? {...product, quantity : product.quantity + quantity} : product
      ))
    } else { //if it dont exist just add it
      setCartData([...cartData, {id: id, quantity: quantity}]);
    }
  }
  //deletes the product from the shopping cart

  function handleDeleteProduct(id , newQuantity) {

    if (newQuantity) {
      const newCartData = cartData.map(product => 
        product.id === id ? {...product, quantity: newQuantity} : product
      )
      setCartData(newCartData)
    } else {
      const newCartData = cartData.filter(product => product.id !== id)
      setCartData(newCartData)
    }
  }

  //calculates total quantity of the shopping cart
  const totalQuantity = cartData.reduce((sum, product) => sum + product.quantity, 0);

  useEffect(() => {
    async function fetchProductData () {
      try {

        const response = await fetch('https://fakestoreapi.com/products/category/electronics');

        if (!response.ok) throw new Error("failed to fetch");

        const data = await response.json();

        setProductData(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchProductData();
  }, [])

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <nav className="navbar">
      <Link to="/" className="logo">GadgetGalaxy</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/contact">Contact</Link>
        <div className="cart-link">
          <Link to="/cart">Shopping Cart</Link>
          {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
        </div>

      </div>
    </nav>

      <Outlet context={{cartData, productData, handleCartAdd, handleDeleteProduct}} />
      
    </>
  )
}

export default App
