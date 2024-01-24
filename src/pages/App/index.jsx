import { useRoutes, BrowserRouter } from "react-router-dom";
import { ShopiProvider } from "../../hooks/useContextShopi";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Navbar from "../../components/Nav";
import Clothes from "../Clothes";
import Electronics from "../Electronics";
import Fornitures from "../Fornitures";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/fornitures", element: <Fornitures /> },
    { path: "/electronics", element: <Electronics /> },
    { path: "/clothes", element: <Clothes /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <ShopiProvider>
        <AppRoutes />
        <Navbar />
      </ShopiProvider>
    </BrowserRouter>
  );
};

export default App;
