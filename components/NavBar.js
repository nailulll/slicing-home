import Image from "next/image";
import Container from "./Container";

export const listMenu = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "Tim",
    url: "#Tim",
  },
  {
    name: "Kontak",
    url: "#Kontak",
  },
];

const NavBar = () => {
  return (
    <>
      <Container>
        <div className="navbar pt-3 lg:pt-12">
          <div className="navbar-start items-center">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost lg:hidden flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 20 20"
                  stroke="#fff"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary/30 backdrop-blur-md rounded-lg w-52"
              >
                {listMenu.map((list) => {
                  return (
                    <li key={list.url}>
                      <a href={list.url} className="text-white">
                        {list.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            <Image
              src="/img/logo.png"
              width="67"
              height="28"
              className="lg:opacity-100 opacity-0"
              alt="logo"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {listMenu.map((list) => {
                return (
                  <li className="font-medium text-white" key={list.url}>
                    <a href={list.url}>{list.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="navbar-end">
            <Image
              src="/img/logo.png"
              width="67"
              height="28"
              className="lg:opacity-0"
              alt="logo"
            />
            <input
              type="text"
              placeholder="Cari rumah"
              className="bg-white/40 lg:px-7 lg:py-3 lg:block hidden px-5 py-2 text-white rounded-md backdrop-blur ring-0 placeholder:text-white focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
export default NavBar;
