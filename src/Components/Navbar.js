import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </div>

        <div className="  collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Women
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <div>
                  <a className="dropdown-item" href="#">
                    NEW ARRIVALS
                  </a>
                  <a className="dropdown-item" href="#">
                    DRESSES
                  </a>
                  <a className="dropdown-item" href="#">
                    TOPS
                  </a>
                  <a className="dropdown-item" href="#">
                    BOTTOMS
                  </a>
                  <a className="dropdown-item" href="#">
                    OVERLAYS
                  </a>
                  <a className="dropdown-item" href="#">
                    CO-ORDS
                  </a>
                  <a className="dropdown-item" href="#">
                    JUMPSUITS
                  </a>
                </div>

                <div className="img">
                  <img src={Preview} alt="Image" />{" "}
                </div>
              </div>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                MEN <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ACCESSORIES
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                GIFTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                COLLECTIONS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" href="#">
                THE FESTIVAL SHOP
              </a>
            </li>
          </ul>
        </div>
        <div className="icons ">
          <span>
            <i className="fa fa-search" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-heart-o" aria-hidden="true"></i>
          </span>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
        </div>
        <div className="cart">
          <span>
            <i className="fa fa-shopping-cart mr-3" aria-hidden="true"></i>0
          </span>
        </div>
        <div className="inr">
          <span>
            <i className="fa fa-chevron-down mr-2" aria-hidden="true"></i>INR
          </span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
