import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import DetailPage from "./pages/detail-page/DetailPage";
import SearchPage from "./pages/search-page/SearchPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import Loading from "./components/loading/Loading";

const RegionPageComponent = lazy(
  () => import("./pages/region-page/RegionPage")
);

const EvolutionLine = lazy(
  () => import("./pages/evolution-line/EvolutionLine")
);

const MyPokemon = lazy(() => import("./pages/my-pokemon/MyPokemon"));

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "pokemon/:region",
          element: (
            <Suspense fallback={<Loading />}>
              <RegionPageComponent />
            </Suspense>
          ),
        },
        {
          path: "pokemon/detail/:idPokemon",
          element: <DetailPage />,
        },
        {
          path: "pokemon/evolutions",
          element: <EvolutionLine />,
        },
        {
          path: "/my-pokemon",
          element: (
            <Suspense fallback={<Loading />}>
              <MyPokemon />
            </Suspense>
          ),
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
