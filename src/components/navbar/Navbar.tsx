import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between min-h-[50px] items-center">
        <div className="logo font-bold">POKEMON</div>
        <div className="Menu flex gap-2 ">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"pokemon/kanto-region"}>Kanto</NavLink>
          <NavLink to={"pokemon/johto-region"}>Johto</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
