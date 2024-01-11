import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./App.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <> Home </>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
