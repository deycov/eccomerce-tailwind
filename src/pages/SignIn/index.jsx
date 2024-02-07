import React from "react";
import Layout from "../../components/Layout";
import { ShopiStorage } from "../../hooks/useContextShopi";

function SignIn() {
  const {setErrorBuild} = React.useContext(ShopiStorage);
  React.useEffect(()=>{
    setErrorBuild(true);
  },[])

  return <Layout>SignIn</Layout>;
}

export default SignIn;
