import PokemonLogo from "../../assets/logo/Pokémon_logo.svg";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
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
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
