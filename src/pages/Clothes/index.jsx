import React, { useContext } from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
function Clothes() {
  const { load, getClothes, items } = useContext(ShopiStorage);

  React.useEffect(()=>{
    getClothes();
  },[])

  return (
    <Layout>
      {load && <p>cargando</p>}
      <div className='grid py-6 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Clothes;