import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ShopiStorage } from "../../hooks/useContextShopi";

import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Search from "../../components/Search";

function Home() {
  const { searched, load } = useContext(ShopiStorage);
  return (
    <Layout>
      <Search />
  
      {load && <p>cargando</p>}

      {(searched.length < 1 && load )&& <p className="m-auto mt-12 p-5 font-semibold bg-red-200 rounded-lg"> Lo sentimos no encontramos la prenda que estas buscando 😥😓</p>}

      <div className='grid py-6 m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12'>
        <>
          {searched.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </>  
      </div>
    </Layout>
  );
}

export default Home;
