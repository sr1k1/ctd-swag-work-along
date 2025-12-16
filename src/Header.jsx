import ctdLogo from './assets/icons/mono-blue-logo.svg';
import carta from './assets/icons/shoppingCart.svg';

import { useEffect } from 'react';

function Header({ cart }) {
  // Utilize useEffect to print full shopping cart to console every time
  // the page has to re-render (i.e. we have to add something to cart)
  useEffect(() => {
    cart.forEach((item) => {
      console.log(item.baseName, item.cartItemId);
    });
    if (cart.length > 0) {
      console.log('--end of cart--');
    }
  });
  return (
    <div className="coming-soon">
      <img src={carta} alt="Code the Dream Shopping cart logo" />
      <h1>CTD Swag</h1>
      <div style={{ height: 100, width: 100 }}>
        <img src={ctdLogo} alt="Code The Dream Logo" />
      </div>
    </div>
  );
}

export default Header;
