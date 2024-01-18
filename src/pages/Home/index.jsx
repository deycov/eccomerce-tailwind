import React from "react";

import useFetchProducts from "../../hooks/useFetchApi";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
function Home() {
  const API_URL = "https://fakestoreapi.com/products?limit=8";
  const [items, setItems] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    setLoad(true);
    useFetchProducts(API_URL, setItems, setLoad);
  }, []);

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
