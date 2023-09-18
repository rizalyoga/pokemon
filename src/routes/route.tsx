import Home from "../pages/home/Home";
import DetailPage from "../pages/detail-page/DetailPage";
import SearchPage from "../pages/search-page/SearchPage";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "pokemon/detail/:idPokemon",
    element: <DetailPage />,
  },
  {
    path: "filter/",
    element: <SearchPage />,
  },
];
