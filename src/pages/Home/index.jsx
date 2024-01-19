import React, { useContext } from "react";
import { ShopiProvider, ShopiStorage } from "../../hooks/useContextShopi";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
function Home() {
  const { items, load, addToCart } = useContext(ShopiStorage);

  return (
    <Layout>
      Home
      {load && <p>cargando</p>}
      <div className='grid m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
