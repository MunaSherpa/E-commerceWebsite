
// import React, { useEffect, useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
// import Box from '@mui/system/Box';
// import Navbar from '../../components/Navbar';

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
// }

// const ProductList: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [error, setError] = useState<Error | null>(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch('https://fakestoreapi.com/products');
//       const data: Product[] = await response.json();
//       setProducts(data.slice(0, 12));
//     } catch (error) {
//       setError(error);
//     }
//   };

//   return (
//     <Box>
//       <Navbar />
//       <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridGap: 16 }}>
//         {products.length > 0 ? (
//           products.map((product: Product) => (
//             <Card key={product.id}>
//               <CardActionArea>
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={product.image}
//                   alt={product.title}
//                 />
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     {product.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {product.description}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Price: ${product.price}
//                   </Typography>
//                 </CardContent>
//               </CardActionArea>
//             </Card>
//           ))
//         ) : error ? (
//           <div>Error: {error.message}</div>
//         ) : (
//           <div>Loading...</div>
//         )}
//       </Box>
//     </Box>
//   );
// };

// export default ProductList;
























import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import './product.css';
import CartPage from "../Auth/Cart/CartPage";
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Product = () => {
    const [productsList, setProductsList] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isAddToCartClicked, setIsAddToCartClicked] = useState(false);

    interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        image: string;
        category: string;
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(res => {
                setProductsList(res);
                setFilteredProducts(res);
            });
    }, []);

    const filterResult = (category: string) => {
        const filtered = productsList.filter((product: Product) => product.category === category);
        setFilteredProducts(filtered);
    };

    const addtoCart = (cartItem: Product) => {
        console.log(cartItem);
        setCartCount(prevCount => prevCount + 1);
        setCartItems(prevItems => [...prevItems, cartItem]);
        setIsAddToCartClicked(true);
    };

    const toggleCart = () => {
        setIsCartOpen(prevValue => !prevValue);
        setIsAddToCartClicked(false);
    };

    return (
        <>
            <Navbar />
            <div className="page">
                <div className="nav">
                    <div className="category">
                        <h1>Categories</h1>
                        <div className="btns">
                            <button className="cat-btn" onClick={() => filterResult("electronics")}>Electronics</button>
                            <button className="cat-btn" onClick={() => filterResult("jewelery")}>Jewelery</button>
                            <button className="cat-btn" onClick={() => filterResult("men's clothing")}>Men</button>
                            <button className="cat-btn" onClick={() => filterResult("women's clothing")}>Women</button>
                        </div>
                        <div className="addtocart-btn">
                            <h2 onClick={toggleCart}><AiOutlineShoppingCart className="cart-icon" /><span>{cartCount}</span></h2>
                        </div>
                    </div>
                </div>
                <div className="order">
                    <div className="product-container">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((prod: Product) => (
                                <div className="card" key={prod.id}>
                                    <div className="product-img">
                                        <img src={prod.image} alt="prod-img" />
                                    </div>
                                    <div className="product-title">
                                        <h4>{prod.title}</h4>
                                    </div>
                                    <div className="product-desc">
                                        <h6>{prod.description}</h6>
                                    </div>
                                    <div className="product-price">
                                        <h6>Price </h6><h6>${prod.price}</h6>
                                    </div>
                                    <div className="btn">
                                        <button
                                            className="prod-btn"
                                            onClick={() => addtoCart(prod)}
                                        >
                                            Add to Cart
                                        </button>
                                        <button className="prod-btn"> Learn More</button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="loader">
                                Loading....
                            </div>
                        )}
                    </div>
                    {isCartOpen && !isAddToCartClicked && (
                        <div className="selected-products">
                            <div className="cart-head">
                                <h5>Your Cart</h5>
                            </div>
                            <CartPage cartItems={cartItems} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Product;





