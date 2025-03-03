// react router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages

import Home from "./pages/Home";
import Error from "./pages/Error";
import Cart from "./pages/Cart";

// layouts
import MainLayout from "./layouts/MainLayout";
// import Product from "./components/Product";
import Product from "./pages/Product";
import Details from "./pages/Details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/details",
          element: <Details />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
