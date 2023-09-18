import Home from "../pages/home/Home";
import DetailPage from "../pages/detail-page/DetailPage";
import SearchPage from "../pages/search-page/SearchPage";
import MyPokemon from "../pages/my-pokemon/MyPokemon";
import RegionPage from "../pages/region-page/RegionPage";
// import Loading from "../components/loading/Loading";
// import EvolutionLine from "../components/detail-page-components/SpritesPokemon";

// const MyPokemon = lazy(() => import("./pages/my-pokemon/MyPokemon"));

// const RegionPageComponent = lazy(
//   () => import("./pages/region-page/RegionPage")
// );

// const EvolutionLine = lazy(
//   () => import("../pages/evolution-line/EvolutionLine")
// );

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/:region",
    element: <RegionPage />,
  },
  // {
  //   path: "pokemon/:region",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <RegionPageComponent />
  //     </Suspense>
  //   ),
  // },
  {
    path: "pokemon/detail/:idPokemon",
    element: <DetailPage />,
  },
  // {
  //   path: "pokemon/evolutions",
  //   element: <EvolutionLine />,
  // },
  {
    path: "/my-pokemon",
    element: <MyPokemon />,
  },
  // {
  //   path: "/my-pokemon",
  //   element: (
  //     <Suspense fallback={<Loading />}>
  //       <MyPokemon />
  //     </Suspense>
  //   ),
  // },
  {
    path: "filter/",
    element: <SearchPage />,
  },
];
