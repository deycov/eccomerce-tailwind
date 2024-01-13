import React from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
function Home() {
  const API_URL = "https://fakestoreapi.com/products?limit=8";
  const [items, setItems] = React.useState([]);
  const [load, setLoad] = React.useState(false);

  React.useEffect(() => {
    setLoad(true);
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(
            `## ERROOOR ## hubo un problema del tipo HTTP, ${response.status}`
          );
        const data = await response.json();
        setItems(data);
        setLoad(false);
      } catch (err) {
        console.error(
          `## ERROOOR ## La pagina no pudo cargar los datos por -> ${err}`
        );
        setLoad(false);
      }
    };

    fetchProducts();
    console.log(items);
  }, []);

  return (
    <Layout>
      Home
      {load && <p>cargando</p>}
      <div className='mt-10 grid  grid-cols-3 '>
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
