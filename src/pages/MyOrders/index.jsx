import React from "react";
import Layout from "../../components/Layout";
import { ShopiStorage } from "../../hooks/useContextShopi";

function MyOrders() {
  const {getOrders, orders} = React.useContext(ShopiStorage);
  React.useEffect(() => getOrders, []);
  
  return (
    <Layout>
      <section className="flex flex-col w-2/4 p-3 m-auto">
        {orders.map((order,i)=>(
          <ul className="w-full flex flex-col items-center justify-center my-2 px-2">
            <p className="border-2 w-full p-1 text-center border-black rounded">Compra {i+1} </p>
          {order.map((items)=>(
            <li className="w-2/4 flex flex-row items-center justify-around p-3">
              <figure className=" w-16 h-20 ">
                <img src={items.image} className=" object-cover " />
              </figure>
              <p> {items.title} </p> 
            </li>
          ))}
          </ul>
        ))}
      </section>
    </Layout>
  );
}

export default MyOrders;
