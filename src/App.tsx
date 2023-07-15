import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import RegionPage from "./pages/region-page/RegionPage";
import DetailPage from "./pages/detail-page/DetailPage";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "pokemon/kanto-region",
          element: <RegionPage />,
        },
        {
          path: "pokemon/johto-region",
          element: <RegionPage />,
        },
        {
          path: "pokemon/:idPokemon",
          element: <DetailPage />,
        },
      ],
    },
  ]);

  return (
    <div className="margins">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
