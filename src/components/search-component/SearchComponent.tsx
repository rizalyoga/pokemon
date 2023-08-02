import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

interface SearchComponentProps {
  openSearchComponent: boolean;
  openSearchComponentHandler: () => void;
}

const SearchComponent = (props: SearchComponentProps) => {
  const navigate = useNavigate();
  const [, setSearchParamas] = useSearchParams();
  const [paramsForSearch, setParamsForSearch] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (paramsForSearch != "") {
      navigate(`filter`);
      setSearchParamas({ pokemon: paramsForSearch });
      props.openSearchComponentHandler();
    }
  };

  useEffect(() => {
    if (props.openSearchComponent) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "visible";
  }, [props.openSearchComponent]);

  if (props.openSearchComponent === false) {
    return <></>;
  }

  return (
    <>
      <div
        id="myModal"
        className="fixed left-0 z-[20] top-0 w-screen h-screen flex justify-center items-center"
        style={{ backgroundColor: "rgba(205, 205, 205, 0.882)" }}
        onClick={props.openSearchComponentHandler}
      >
        <form
          onSubmit={onSubmitHandler}
          className="animate-show-content-animation form-control w-[35rem] mx-4 relative z-50"
        >
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full px-4 absolute m-auto"
            onChange={(e) => setParamsForSearch(e.target.value)}
            onClick={props.openSearchComponentHandler}
            autoFocus
          />
        </form>
      </div>
    </>
  );
};

export default SearchComponent;
