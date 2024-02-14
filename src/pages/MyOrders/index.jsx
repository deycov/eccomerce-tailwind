import React from "react";
import Layout from "../../components/Layout";
import Bill from "../../components/Bill";
import CardsBills from "../../components/CardsBills";
import { ShopiStorage } from "../../hooks/useContextShopi";

function MyOrders() {
  const {getOrders, orders, showBill} = React.useContext(ShopiStorage);
  React.useEffect(() =>{ getOrders() }, []);
  return (
    <Layout>

      <div className="grid grid-cols-1 sm:grid-cols-2 h-full">
        {showBill &&
          <Bill />
        }

        <div className="flex flex-col rounded-md p-5">
          <h2 className="text-center font-thin text-lg ">Your bills</h2>
          {orders.map((list,i) => (
            <CardsBills key={i} {...list} />
          ))}
        </div>
      </div>
      
    </Layout>
  );
}

export default MyOrders;
