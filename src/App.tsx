import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/error-page/ErrorPage";
import { routes } from "./routes/route.tsx";

import Loading from "./components/loading/Loading.tsx";

const RegionPageComponent = lazy(
  () => import("./pages/region-page/RegionPage")
);
const MyPokemon = lazy(() => import("./pages/my-pokemon/MyPokemon"));

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        ...routes,
        {
          path: "pokemon/:region",
          element: (
            <Suspense fallback={<Loading />}>
              <RegionPageComponent />
            </Suspense>
          ),
        },
        {
          path: "/my-pokemon",
          element: (
            <Suspense fallback={<Loading />}>
              <MyPokemon />
            </Suspense>
          ),
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
