import React from "react";
import Layout from "../../components/Layout";
import { ShopiStorage } from "../../hooks/useContextShopi";

function MyAccount() {
 const {setErrorBuild} = React.useContext(ShopiStorage);
  React.useEffect(()=>{
    setErrorBuild(true);
  },[])

  return <Layout>MyAccount</Layout>;
}

export default MyAccount;
