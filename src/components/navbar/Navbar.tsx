import PokemonLogo from "../../assets/logo/Pokémon_logo.svg";
import PokemonLogoMini from "../../assets/logo/pokemon-logo.png";
import { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [params, setParams] = useState("");
  const [, setSearchParamas] = useSearchParams();

  const [themes, setThemes] = useState<string | null>(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", themes as string);
    const localTheme = localStorage.getItem("theme");
    document
      .querySelector("html")
      ?.setAttribute("data-theme", localTheme as string);
  }, [themes]);

  const handleToogle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setThemes("night");
    } else {
      setThemes("light");
    }
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params != "") {
      navigate(`filter`);
      setSearchParamas({ pokemon: params });
    }
  };

  return (
    <>
      <nav className="navbar  mb-8 rounded-xl ">
        <div className="flex-1">
          <NavLink
            to={"/"}
            className="btn btn-ghost normal-case text-warning text-2xl font-bold max-md:p-0"
          >
            <img
              className="max-w-[98px] max-sm:hidden"
              src={PokemonLogo}
              alt="pokemon-logo"
            />
            <img
              className="max-w-[30px] md:hidden"
              src={PokemonLogoMini}
              alt="pokemon-logo"
            />
          </NavLink>
        </div>
        <form onSubmit={onSubmitHandler} className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto max-md:w-full max-md:ml-6"
            onChange={(e) => setParams(e.target.value)}
          />
        </form>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 max-md:ml-4">
            <li>
              <details>
                <summary>Region</summary>
                <ul className="p-2 bg-base-100 z-10">
                  <li className="pb-2">
                    <NavLink to={"/"}>All</NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to={"pokemon/kanto-region"}>Kanto</NavLink>
                  </li>
                  <li className="pb-2">
                    <NavLink to={"pokemon/johto-region"}>Johto</NavLink>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <label className="swap swap-rotate pl-4">
          <input type="checkbox" onChange={handleToogle} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
