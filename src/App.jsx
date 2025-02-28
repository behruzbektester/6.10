// react router dom imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages

import Home from "./pages/Home";
import Error from "./pages/Error";

// layouts
import MainLayout from "./layouts/MainLayout";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
