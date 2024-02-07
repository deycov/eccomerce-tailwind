import React from "react";
import ContainerDetail from "../ContainerDetail";
import ProductDetail from "../ProductDetail";
import CartDetail from "../CartDetail";
import { ShopiStorage } from "../../hooks/useContextShopi";
import { PortalError, PortalSuccess, PortalBuild } from "../Portals";

function Layout({ children }) {
  const {showCart, showProductDetail, errorCondition, succesCondition, errorBuild } = React.useContext(ShopiStorage)
  return (
    <>
      { errorBuild &&
        <PortalBuild/>
      }
      
      { succesCondition &&
        <PortalSuccess/>
      }

      { errorCondition &&
        <PortalError/>
      }

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

      <div className='mt-20 flex flex-col'>
        {children}
      </div>
    </>
  );
}

export default Layout;
