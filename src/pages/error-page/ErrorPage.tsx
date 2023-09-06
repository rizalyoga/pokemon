import {
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
} from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import NotFoundIlustration from "../../assets/page-not-found.png";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar />
      <div className="absolute w-full flex justify-center items-center flex-col min-h-[80vh]">
        <h1 className="font-bold text-8xl ">Oops!</h1>
        <img src={NotFoundIlustration} alt="404-not-found" />
        <p className="text-lg">Sorry, an unexpected error has occurred.</p>
        <p className="text-lg">
          <i>{errorMessage}</i>
        </p>
        <button
          onClick={goToHomePage}
          className="btn btn-warning hover:bg-yellow-300 hover:border-yellow-300 mt-4 text-slate-600"
        >
          Back to Home page
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
