import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import RegionPage from "./pages/region-page/RegionPage";
import DetailPage from "./pages/detail-page/DetailPage";
import SearchPage from "./pages/search-page/SearchPage";

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
          path: "pokemon/:region",
          element: <RegionPage />,
        },
        {
          path: "pokemon/detail/:idPokemon",
          element: <DetailPage />,
        },
        {
          path: "filter/",
          element: <SearchPage />,
        },
      ],
    },
  ]);

  return (
    <div className="p-5 overflow-x-hidden flex justify-center items-center flex-col">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
