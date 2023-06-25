import { Link } from "react-router-dom";
import { navLinks, categoryNames } from "../../constants";
import { logo } from "../../assets";
import { FaGithub, FaStar } from "react-icons/fa";

declare global {
  interface Window {
    my_modal_1: {
      showModal: () => void;
    };
  }
}

const NavBar = () => {
  return (
    <header className="fixed w-full top-0 z-1000 bg-base-200">
      <nav className="navbar max-w-[1400px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link to={link.id}>{link.title}</Link>
                </li>
              ))}
              
              {categoryNames.map((category) => (
                  <Link to={`/${category.id}`} key={category.id}>
                    <li className="menu-item">
                      <a>{category.title}</a>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <img className="w-10 h-10" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="yellow"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 17l2.5-2.5m0 0L17 17M6 6h14l-1.79 9.421A2 2 0 0116.21 18H7.79a2 2 0 01-1.98-2.579L6 6zm0 0l-4 4m4-4V3"
              />
            </svg>
          </button>
          <button
            onClick={() => window.my_modal_1.showModal()}
            className="btn btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="yellow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-secondary indicator-item animate-bounce"></span>
            </div>
          </button>
          <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Hi There, I'm Lautaro!</h3>
              <p className="py-4 flex flex-row items-center">
                Can you give me a <FaStar className="text-yellow mx-1 animate-spin text-xl"/>in Github? It will help me a lot!
              </p>
              <a target="_blank" className="btn btn-circle btn-primary text-white animate-pulse" href="https://www.github.com/speedbuild98">
                  <FaGithub className="text-3xl"/>
              </a>
              <div className="modal-action">
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
