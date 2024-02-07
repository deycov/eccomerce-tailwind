import React, { useContext } from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
function Fornitures() {
  const { load, items, changeCategorie, categories } = useContext(ShopiStorage);

  React.useEffect(()=>{
    changeCategorie(items,'jewelery');
  },[])

  return (
    <Layout>
      {load && <p>cargando</p>}
      <div className='grid py-6 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        {categories.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Fornitures;