import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import ErrorPage from "./pages/error-page/ErrorPage";
import { routes } from "./routes/route.tsx";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: routes,
    },
  ]);

  return (
    <div className="p-5 overflow-x-hidden flex justify-center items-center flex-col">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
