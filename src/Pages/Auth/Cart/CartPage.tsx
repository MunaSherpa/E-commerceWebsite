
// import Navbar from '../../../components/Navbar';
// import './CartPage.css';





// import './CartPage.css';

// interface CartPageProps {
//   cartItems: Product[];
// }

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
// }

// const CartPage: React.FC<CartPageProps> = ({ cartItems }) => {
//   return (
//     <>
//     <div className="cart-page">
//       {cartItems.length > 0 ? (
//         <ul className="cart-items">
//           {cartItems.map((item: Product) => (
//             <li key={item.id} className="cart-item">
//               <div className="cart-item-image">
//                 <img src={item.image} alt={item.title} />
//               </div>
//               <div className="cart-item-details">
//                 <h4 className="cart-item-title">{item.title}</h4>
//                 <p className="cart-item-price">${item.price}</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p className="empty-cart">Your cart is empty</p>
//       )}
//     </div>
    
//     </>
//   );
// };

// export default CartPage;













// import React, { useState } from 'react';
// import Navbar from '../../../components/Navbar';
// import './CartPage.css';

// interface CartPageProps {
//   cartItems: Product[];
// }

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   image: string;
//   category: string;
//   quantity: number;
// }

// const CartPage: React.FC<CartPageProps> = ({ cartItems: initialCartItems }) => {
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   const increaseCartQuantity = (id: number) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id) {
//         return {
//           ...item,
//           quantity: item.quantity + 1,
//           price: item.price + item.price,
//         };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const decreaseCartQuantity = (id: number) => {
//     const updatedCartItems = cartItems.map((item) => {
//       if (item.id === id && item.quantity > 0) {
//         return {
//           ...item,
//           quantity: item.quantity - 1,
//           price: item.price - item.price,
//         };
//       }
//       return item;
//     });
//     setCartItems(updatedCartItems);
//   };

//   const removeFromCart = (id: number) => {
//     const updatedCartItems = cartItems.filter((item) => item.id !== id);
//     setCartItems(updatedCartItems);
//   };

//   return (
//     <>
//       <div className="cart-page">
//         {cartItems.length > 0 ? (
//           <ul className="cart-items">
//             {cartItems.map((item: Product) => (
//               <li key={item.id} className="cart-item">
//                 <div className="cart-item-image">
//                   <img src={item.image} alt={item.title} />
//                 </div>
//                 <div className="cart-item-details">
//                   <h4 className="cart-item-title">{item.title}</h4>
//                   <p className="cart-item-price">${item.price}</p>
//                   <div className="cart-item-actions">
//                     <div className="d-flex align-items-center justify-content-center">
//                       {item.quantity === 0 ? (
//                         <button className="btn btn-primary" onClick={() => increaseCartQuantity(item.id)}>
//                           + Add To Cart
//                         </button>
//                       ) : (
//                         <div className="d-flex align-items-center">
//                           <button className="btn btn-secondary" onClick={() => decreaseCartQuantity(item.id)}>
//                             -
//                           </button>
//                           <span className="cart-item-quantity">{item.quantity}</span>
//                           <button className="btn btn-secondary" onClick={() => increaseCartQuantity(item.id)}>
//                             +
//                           </button>
//                         </div>
//                       )}
//                       <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="empty-cart">Your cart is empty</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default CartPage;














import React, { useState } from 'react';
import Navbar from '../../../components/Navbar';
import './CartPage.css';

interface CartPageProps {
  cartItems: Product[];
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
}

const CartPage: React.FC<CartPageProps> = ({ cartItems: initialCartItems }) => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const increaseCartQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
          price: item.price + item.price,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseCartQuantity = (id: number) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id && item.quantity > 0) {
        return {
          ...item,
          quantity: item.quantity - 1,
          price: item.price - item.price,
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const formatCurrency = (amount: number) => {
    return '$' + amount.toFixed(2);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <div className="cart-page">
        {cartItems.length > 0 ? (
          <ul className="cart-items">
            {cartItems.map((item: Product) => (
              <li key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="cart-item-details">
                  <h4 className="cart-item-title">{item.title}</h4>
                  <p className="cart-item-price">${item.price}</p>
                  <div className="cart-item-actions">
                    <div className="d-flex align-items-center justify-content-center">
                      {item.quantity === 0 ? (
                        <button className="btn btn-primary" onClick={() => increaseCartQuantity(item.id)}>
                          + Add To Cart
                        </button>
                      ) : (
                        <div className="d-flex align-items-center">
                          <button className="btn btn-secondary" onClick={() => decreaseCartQuantity(item.id)}>
                            -
                          </button>
                          <span className="cart-item-quantity">{item.quantity}</span>
                          <button className="btn btn-secondary" onClick={() => increaseCartQuantity(item.id)}>
                            +
                          </button>
                        </div>
                      )}
                      <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="empty-cart">Your cart is empty</p>
        )}

        {cartItems.length > 0 && (
          <div className="total-price">
            Total Price: {formatCurrency(calculateTotalPrice())}
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;














