import "./index.css";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div>
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
            <img src={process.env.PUBLIC_URL + "/Images/logo.png"} alt="logo" />
          </div>
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
                  <img
                    src={process.env.PUBLIC_URL + "/Images/preview.png"}
                    alt="Image"
                  />
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
        <div className = "d-flex">
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
        </div>
      </nav>

      {/* ********** Main Section **************** */}

      <main>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
          >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className=" carousel-item active">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Images/main.png"}
                alt="First slide"
              />
              <div>
                <h3>MORDEN ARCHIVE</h3>
                <h1>SHOP NOW</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Images/main.png"}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={process.env.PUBLIC_URL + "/Images/main.png"}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            {/* <span className="sr-only">Previous</span> */}
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            {/* <span className="sr-only">Next</span> */}
          </a>
        </div>
      </main>

      {/* **********Section Nostalgic************* */}

      <section className="nostalgic">
        <div className="row">
          <div className="left col-lg-6 col-md-8 col-sm-10 mx-auto">
            <img
              src={process.env.PUBLIC_URL + "/Images/nostalgic.png"}
              className="img-fluid"
              alt="Image"
            />
          </div>
          <div className="right text-center col-lg-6 col-md-8 col-sm-10  mx-auto">
            <h1>NOSTALGIC MASTERPIECES</h1>
            <p>RICH PLAY OF SURFACE TEXTURES ON PURE COTTON AND LINEN</p>
            <div
              id="carouselExampleIndicators1"
              className="carousel slide "
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators1"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators1"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators1"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/nostalgic.png"}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/nostalgic.png"}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/Images/nostalgic.png"}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators1"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators1"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/************* Section Festive ********* */}

      <section className="festive container">
        <h1>FESTIVE ENSEMBLES</h1>
        <p>EFFORTLESS STYLES TO THROW ON AND GO...</p>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-10 mx-auto">
            <div className="overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/Images/festive1.png"}
                className="img-fluid"
                alt="Image"
              />
            </div>
            <h3>PALAZZO SAREE</h3>
            <p> र23,160.00</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-10 mx-auto">
            <div className="overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/Images/festive2.png"}
                className="img-fluid"
                alt="Image"
              />
            </div>
            <h3>PALAZZO SAREE</h3>
            <p> र23,160.00</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-10 mx-auto">
            <div className="overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/Images/festive3.png"}
                className="img-fluid"
                alt="Image"
              />
            </div>
            <h3>PALAZZO SAREE</h3>
            <p> र23,160.00</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-10 mx-auto">
            <div className="overflow-hidden">
              <img
                src={process.env.PUBLIC_URL + "/Images/festive4.png"}
                className="img-fluid"
                alt="Image"
              />
            </div>
            <h3>PALAZZO SAREE</h3>
            <p> र23,160.00</p>
          </div>
        </div>
      </section>

      {/* *********** Classic Section ************* */}

      <section className="classic">
        <div className="img">
          <img
            src={process.env.PUBLIC_URL + "/Images/classic.png"}
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="classic-div">
          <h1>
            TIME <span>LESS</span>
          </h1>
          <h1>
            CLAS <span>SICS</span>
          </h1>
          <p>
            MADE TO LAST,GETTING <span> BETTER EVERY YEAR</span>
          </p>
        </div>
      </section>

      {/* ************ Diwali section************  */}

      <section className="diwali">
        <div className="img">
          <img
            src={process.env.PUBLIC_URL + "/Images/diwali.png"}
            alt="Image"
            className="img-fluid"
          />
        </div>

        <div className="diwali-div">
          <h1>DIWALI</h1>
          <h1>CELEBRATION</h1>
          <h1>SELL</h1>
        </div>
      </section>

      {/* *************Contact Section ************* */}

      <footer className="contact">
        <div className="logo mb-5">
          <img
            src={process.env.PUBLIC_URL + "/Images/logo.png"}
            alt="Image"
            className="img-fluid"
          />
        </div>
        <div className="mb-5">
          <h1>NEWS LETTER </h1>
          <p>
            Sign up and get notified about the latest launches and surprises
          </p>
        </div>
        <div className="input mb-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="EMAIL ID"
            required
          />
          <label htmlFor="email">
            SUBSCRIBE <i class="fa fa-caret-right" aria-hidden="true"></i>
          </label>
        </div>

        <div className="mb-5">
          <h1>CUSTOMER CARE</h1>
          <p>MON - SAT | 9:00 AM - 6:00 PM (IST)</p>
          <p>+919289044698 | cord.orders@gmail.com</p>
        </div>

        <div className="mb-5">
          <h1>STORE TIMINGS </h1>
          <p> MON - SUN | 11:00 AM - 8:00 PM (IST)</p>
          <p>Commerce House, 21, Saibaba Road, Kala Ghoda, Fort, Mumbai.</p>
          <p>
            Shop no. 10, Sefa House, Pali Mala Road, Opposite Bagle Shop Bandra,
            Mumbai.
          </p>
          <p>
            38 A & B, middle lane, Opposite Khan Chacha, Khan Market, New Delhi.
          </p>
        </div>

        <div className = "mb-5">
          <h1>FOLLOW US</h1>
          <div className = "icon">
            <span>
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </span>
            <span>
              <i class="fa fa-pinterest-p" aria-hidden="true"></i>
            </span>
          </div>
        </div>

        <div className= "footer">
          <ul>
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">STORES</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">RETURN & EXCHANGE</a></li>
            <li><a href="#">PRIVACY TERMS & CONDITIONS</a></li>
          </ul>
          <p>Cord Studio. All Rights Reserved &copy; Copyright 2021</p>
        </div>
      </footer>
    </>
  );
};

export default App;
