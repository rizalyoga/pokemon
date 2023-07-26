import PokemonLogo from "../../assets/logo/Pokémon_logo.svg";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useState } from "react";
import {
  NavLink,
  Outlet,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [params, setParams] = useState("");
  const [searchParams, setSearchParamas] = useSearchParams();
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
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
      <nav className="navbar bg-slate-300 mb-8 rounded-xl ">
        <div className="flex-1">
          <NavLink
            to={"/"}
            className="btn btn-ghost normal-case text-warning text-2xl font-bold"
          >
            <img
              className="max-w-[98px]"
              src={PokemonLogo}
              alt="pokemon-logo"
            />
          </NavLink>
        </div>
        <form onSubmit={onSubmitHandler} className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
            onChange={(e) => setParams(e.target.value)}
          />
        </form>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
        <DarkModeSwitch
          className="w-[2rem] h-[2rem] mx-2"
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={120}
        />
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
