import React from "react";
import ContainerDetail from "../ContainerDetail";
import ProductDetail from "../ProductDetail";
import CartDetail from "../CartDetail";
import { ShopiStorage } from "../../hooks/useContextShopi";

function Layout({ children }) {
  const {showCart, showProductDetail} = React.useContext(ShopiStorage)
  return (
    <>
      {showCart &&
        <ContainerDetail>    
          <CartDetail/>
        </ContainerDetail> 
      }
       
      {showProductDetail &&
        <ContainerDetail>    
          <ProductDetail/>
        </ContainerDetail> 
      }

      <div className='mt-20 flex flex-col px-10'>
        {children}
      </div>
    </>
  );
}

export default Layout;
