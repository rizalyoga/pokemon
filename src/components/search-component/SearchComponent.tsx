import "./searchModal.css";
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
        className="modals main left-0 "
        onClick={props.openSearchComponentHandler}
      >
        <span onClick={props.openSearchComponentHandler} id="close">
          &times;
        </span>
        <form
          onSubmit={onSubmitHandler}
          className="form-control w-[35rem] mx-4"
        >
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered z-50 w-full px-4"
            onChange={(e) => setParamsForSearch(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    </>
  );
};

export default SearchComponent;
