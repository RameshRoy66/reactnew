/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import "../css/home.css";
import Layout from "../layout/layout.jsx";
import img1 from "../assets/2.jpg";
import img2 from "../assets/3.jpg";
import img3 from "../assets/4.jpg";
import ban from "../assets/ban.png";

function Ram() {
  return (
    <Layout>
      <div class="container-fluid mb-5">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100 carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100 carimg" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <h1 className="text-center mt-5 mb-3">What We Do</h1>
        <div className="container">
          <div className="row  ">
            <div className="col-sm-4 cardcenter">
              <div class="card ">
                <div class="card-body">
                  <i class="bi bi-vector-pen"></i>
                  <h4 class="card-title mb-3">PIXEL PERFECT</h4>
                  <p class="card-text">
                    Auersla, conse ctetur adipis icing lorem ipsum dolor sit
                    amet
                  </p>
                  <a href="#">View More </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cardcenter">
              <div class="card ">
                <div class="card-body">
                  <i class="bi bi-alt"></i>
                  <h4 class="card-title mb-3">VECTOR SHAPES </h4>
                  <p class="card-text">
                    Auersla, conse ctetur adipis icing lorem ipsum dolor sit
                    amet
                  </p>
                  <a href="#">View More </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cardcenter">
              <div class="card ">
                <div class="card-body">
                  <i class="bi bi-fonts"></i>
                  <h4 class="card-title mb-3">GOOGLE FONTS</h4>
                  <p class="card-text">
                    Auersla, conse ctetur adipis icing lorem ipsum dolor sit
                    amet
                  </p>
                  <a href="#">View More </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cardcenter">
              <div class="card ">
                <div class="card-body">
                  <i class="bi bi-stack"></i>
                  <h4 class="card-title mb-3">EASY LAYERS</h4>
                  <p class="card-text">
                    Auersla, conse ctetur adipis icing lorem ipsum dolor sit
                    amet
                  </p>
                  <a href="#">View More </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cardcenter">
              <div class="card ">
                <div class="card-body">
                  <i class="bi bi-grid-3x3-gap"></i>{" "}
                  <h4 class="card-title mb-3">BOOTSTRAP GRID</h4>
                  <p class="card-text">
                    Auersla, conse ctetur adipis icing lorem ipsum dolor sit
                    amet
                  </p>
                  <a href="#">View More </a>
                </div>
              </div>
            </div>

            <div className="col-sm-4 cardcenter">
              <div class="card ">
                <div class="card-body">
                  <i class="bi bi-pc-display"></i>
                  <h4 class="card-title mb-3">PERFECT DESIGN</h4>
                  <p class="card-text">
                    Auersla, conse ctetur adipis icing lorem ipsum dolor sit
                    amet
                  </p>
                  <a href="#">View More </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bgimg mb-5 mt-5">
          <div>
            <h2>BEST EVER DESIGN</h2>
            <h1>Time to enhance your web presence!</h1>
            <button className="btn btn-primary btn-lg mt-3">
              GET QUOTATION{" "}
            </button>
          </div>
        </div>

        <div className="container mb-5">
          <div className=" life mt-5">
            <h2>THE LIFE SIZE</h2>
            <h1>BRAND STORY</h1>
            <h6>View multiple content block layouts under features section.</h6>
            <hr className="hr" />
            <div className="row mt-5">
              <div className="col-sm-6 ">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magnaal qua.
                  Ut enim ad minim veniam, quis nostrud exercitation ulla mco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culp a
                  qui officia deserunt mollit anim id est laborum. Sed ut per
                  spiciatis unde omnis iste natus error sit voluptatem accusan
                  tium doloremque laudantium, totam rem aperiam, eaque ip
                </p>
              </div>
              <div className="col-sm-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <div className="row mt-3">
                    <div className="col-6">
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                    </div>
                    <div className="col-6">
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                      <h6>
                        <a href="#">WEB & INTERACTIVE DESIGN</a>
                      </h6>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="work">
          <div className="text-center container  life mt-3">
            <h2>WORK PLACE</h2>
            <h1>THE CULTURE</h1>
            <h6>
              Lovely people with nack for design creativity flourish here.
            </h6>
            <hr className=" hrcenter " />

            <div className="text-center  mt-5 ">
              <p className="centercontent">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse.
              </p>
              <div className="image">
                <img src={ban} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mb-5">
          <div className=" life mt-5">
            <h2>WHO WE ARE</h2>
            <h1>TEAM WORK </h1>
            <h6>
              We really love what we do & our work on every project truly
              reflects that.
            </h6>
            <hr className="hr" />
          </div>

          <div className="">
            <div className="row imagerow">
              <div className="col-sm-4 mt-3">
                <div className="position-relative image-container">
                  <img src={img1} alt="Your Image" className="img-fluid" />
                  <div className="overlay-container">
                    <div className="overlay-content">Your Text Here</div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mt-3">
                <div className="position-relative image-container">
                  <img src={img1} alt="Your Image" className="img-fluid" />
                  <div className="overlay-container">
                    <div className="overlay-content">Your Text Here</div>
                  </div>
                </div>
              </div>

              <div className="col-sm-4 mt-3">
                <div className="position-relative image-container">
                  <img src={img1} alt="Your Image" className="img-fluid" />
                  <div className="overlay-container">
                    <div className="overlay-content">Your Text Here</div>
                  </div>
                </div>
              </div>

              <p className="text-center mt-5">
                {" "}
                Martin loves gossiping code on his iPhone. Consectetur
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="bgimg2 mb-5">
            <div className="row text-center">
              <div className="col-sm-3">
                <i class="bi bi-backpack2"></i>
                <h1>amazing</h1>
              </div>

              <div className="col-sm-3">
                <i class="bi bi-backpack2"></i>
                <h1>amazing</h1>
              </div>

              <div className="col-sm-3">
                <i class="bi bi-backpack2"></i>
                <h1>amazing</h1>
              </div>

              <div className="col-sm-3">
                <i class="bi bi-backpack2"></i>
                <h1>amazing</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className=" life text-center mt-5">
            <h2>HEAR FROM</h2>
            <h1>TESTIMONIALS </h1>
            <h6>We always listen to our clients.</h6>
            <hr className="hrcenter" />
          </div>

          <div className=" testmonial d-flex justify-content-center">
            <img
              src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1711808174~exp=1711811774~hmac=ba1db6d09129b9a0b16e4e9de8a03cdd03447f44dec5c7f3e72d4128137ef883&w=740"
              alt=""
            />
          </div>
          <h1>Roy</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
        </div>

        {/* <div>
    <div className='bg-dark text-light footer fixed-bottom'>
    &#x1F495;

        MR.ROY &#x1F495;


    </div>
</div> */}
      </div>
    </Layout>
  );
}

export default Ram;
