import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import CerVerification from "./components/CerVerification";

function Home() {
  return (
    <div>
      <Header />
      <section
        className="main-banner"
        id="main-banner"
        // style={{"background-image: url(./assets/images/banner.jpg);"}}
        style={{ backgroundImage: "url(./assets/images/banner.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content text-center">
                <h1 className="h1-title wow zoomIn" data-wow-duration="800ms ">
                  <span className="text-wrapper">
                    <span className="letters">Beauty, cosmetic & personal care</span>
                  </span>
                </h1>
                {/* <a
                  href="javascript:void(0)"
                  className="sec-btn wow slideInRight"
                  data-wow-duration="800ms"
                >
                  Book an Appointment{" "}
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <About />
      <section
        className="discount"
        id="discount"
        // style="background-image: url(./assets/images/image.jpg);"
        style={{ backgroundImage: "url(./assets/images/image.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 text-center">
              <div className="discount-text">
                <h2 className="ml4">
                  <span className="letters letters-1">Skin Care</span>
                  <span className="letters letters-2">50%</span>
                  <span className="letters letters-3">Off!</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />

      <section
        className="service-provide"
        id="service-provide"
        // style="background-image: url(./assets/images/service-provide.jpg);"
        style={{ backgroundImage: "url(./assets/images/service-provide.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="service-provide-box wow fadeInLeftBig">
                <div
                  className="service-img"
                  // style="background-image: url(./assets/images/icons/highlights.png);"
                  style={{ backgroundImage: "url(./assets/images/icons/highlights.png)" }}
                ></div>
                <h3>Highlights</h3>
                <div className="overflow-text">
                  <p>
                    Hair color can be your crowning glory or an expression of your true personality.
                    At Makeup Master we embrace hair of every color. Your color appointment will
                    begin with a consultation where your stylist will go over what you’d like to
                    achieve and make recommendations for you based on your skin tone and natural
                    base color as well as the condition of your hair.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-provide-box wow zoomIn">
                <div
                  className="service-img"
                  // style="background-image: url(./assets/images/icons/hair-care.png);"
                  style={{ backgroundImage: "url(./assets/images/icons/hair-care.png)" }}
                ></div>
                <h3>Hair Care</h3>
                <div className="overflow-text">
                  <p>
                    We care about your hair services to conditioning treatments and special event
                    looks, Makeup Master offer a full range of hair services at affordable prices.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="service-provide-box wow fadeInRightBig">
                <div
                  className="service-img"
                  // style="background-image: url(./assets/images/icons/haircute.png);"
                  style={{ backgroundImage: "url(./assets/images/icons/haircute.png)" }}
                ></div>
                <h3>Haircut</h3>
                <div className="overflow-text">
                  <p>
                    Makeup Master salon professionals offer you versatile and customized options.
                    Using the latest techniques, you can expect a superior cut and style when you
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Courses />
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="title">
                <h2 className="h2-title wow zoomIn" data-wow-duration="800ms">
                  They said
                </h2>
                <h3 className="h3-title">testimonials</h3>
              </div>
            </div>
          </div>
          <div
            className="testimonial-section wow slideInRight"
            data-wow-duration="800ms"
            // style="visibility: visible; animation-duration: 800ms; animation-name: slideInRight;"
            style={{
              visibility: "visible",
              animationDuration: "800ms",
              animationName: "slideInRight",
            }}
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="testimonials-box">
                  <div className="testimonials-before"></div>

                  <div className="overflow-text">
                    <p>
                      Excellent services! I was very scared and blank when I came for my Hair do,but
                      this salon and obviously has made me very satisfied! Thank you for the awesome
                      services Makeup Master!© Keep working Hard ** **.{" "}
                    </p>
                  </div>
                  <h3>- Harpreet Kaur</h3>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="testimonials-box">
                  <div className="testimonials-before"></div>
                  <div className="overflow-text">
                    <p>
                      Excellent services by Makeup Master. I recently went for hair cut which was
                      just what I wanted . It was amazing experience and staff are fab and friendly.
                      Thanks for the pampering. Highly recommend.{" "}
                    </p>
                  </div>
                  <h3>- Manjit kaur</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="working-hours" id="working-hours">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="title">
                <h2 className="h2-title wow fadeInLeftBig" data-wow-duration="800ms">
                  Working
                </h2>
                <h3 className="h3-title">Working Hours</h3>
              </div>
            </div>
          </div>
          <div className="working-schedule ">
            <div className="row">
              <div className="col-lg-6 order-lg-1 order-2 wow fadeInLeftBig">
                <div className="time-schedule">
                  <span className="day">Working Hours</span>
                  <span className="line"></span>
                  <span className="time">9am-7pm</span>
                </div>
                <div className="small-text">
                  <span>*</span>
                  <p>We are open from 9am to 7pm. Time may be different in winter</p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1 wow fadeInRightBig">
                <div id="timedate">
                  {/* <a id="mon">January</a>
                  <a id="d">1</a>,<a id="y">0</a>
                  <br />
                  <a id="h">12</a> :<a id="m">00</a>:<a id="s">00</a>:<a id="mi">000</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="title">
                <h2 className="h2-title wow zoomIn" data-wow-duration="800ms">
                  Beauty
                </h2>
                <h3 className="h3-title ">gallery</h3>
              </div>
            </div>
          </div>
          <div className="gallery-slider for-desk wow zoomIn">
            <div className="row">
              <div className="col-lg-4">
                <div className="gallery-img">
                  <a href="assets/images/gallery-img3.jpg" data-fancybox="gallery">
                    <div
                      className="img"
                      // style="background-image: url(./assets/images/gallery-img3.jpg);"
                      style={{ backgroundImage: "url(./assets/images/gallery-img3.jpg)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="gallery-img sec-img"
                  // style="position: absolute; top: 0;left: 0;z-index: 2;"
                  style={{ position: "absolute", top: 0, left: 0, zIndex: 2 }}
                >
                  <a href="assets/images/gallery-img2.jpg" data-fancybox="gallery">
                    <div
                      className="img"
                      // style="background-image: url(./assets/images/gallery-img2.jpg);"
                      style={{ backgroundImage: "url(./assets/images/gallery-img2.jpg)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="gallery-img">
                  <a href="assets/images/gallery-img4.jpg" data-fancybox="gallery">
                    <div
                      className="img"
                      // style="background-image: url(./assets/images/gallery-img4.jpg);"
                      style={{ backgroundImage: "url(./assets/images/gallery-img4.jpg)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="gallery-img">
                  <a href="assets/images/gallery-img5.jpg" data-fancybox="gallery">
                    <div
                      className="img"
                      // style="background-image: url(./assets/images/gallery-img5.jpg);"
                      style={{ backgroundImage: "url(./assets/images/gallery-img5.jpg)" }}
                    ></div>
                  </a>
                </div>
              </div>
              <div className="col-lg-4"></div>
              <div className="col-lg-4">
                <div className="gallery-img">
                  <a href="assets/images/gallery-img.jpg" data-fancybox="gallery">
                    <div
                      className="img"
                      // style="background-image: url(./assets/images/gallery-img.jpg);"
                      style={{ backgroundImage: "url(./assets/images/gallery-img.jpg)" }}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="for-mobile">
            <div className="row">
              <div className="col-lg-4">
                <div className="gallery-img wow zoomIn">
                  <a href="assets/images/gallery-img3.jpg" data-fancybox="gallery">
                    <div
                      className="img"
                      // style="background-image: url(./assets/images/gallery-img5.jpg);"
                      style={{ backgroundImage: "url(./assets/images/gallery-img5.jpg)" }}
                    ></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="brands wow fadeInRightBig" id="brands">
        <div className="container">
          <div className="for-desk">
            <div className="row">
              <div className="col-lg-3">
                <a href="javascript:void(0)">
                  <div
                    className="brand-img brand-hover"
                    // style="background-image: url(./assets/images/brands/brand-4.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-4.png)" }}
                  ></div>
                  <div
                    className="brand-img"
                    // style="background-image: url(./assets/images/brands/brand-4.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-4.png)" }}
                  ></div>
                </a>
              </div>
              <div className="col-lg-3">
                <a href="javascript:void(0)">
                  <div
                    className="brand-img brand-hover"
                    // style="background-image: url(./assets/images/brands/brand-3.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-3.png)" }}
                  ></div>
                  <div
                    className="brand-img"
                    // style="background-image: url(./assets/images/brands/brand-3.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-3.png)" }}
                  ></div>
                </a>
              </div>
              <div className="col-lg-3">
                <a href="javascript:void(0)">
                  <div
                    className="brand-img brand-hover"
                    // style="background-image: url(./assets/images/brands/brand-2.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-2.png)" }}
                  ></div>
                  <div
                    className="brand-img"
                    // style="background-image: url(./assets/images/brands/brand-2.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-2.png)" }}
                  ></div>
                </a>
              </div>
              <div className="col-lg-3">
                <a href="javascript:void(0)">
                  <div
                    className="brand-img brand-hover"
                    // style="background-image: url(./assets/images/brands/brand-1.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-1.png)" }}
                  ></div>
                  <div
                    className="brand-img"
                    //style="background-image: url(./assets/images/brands/brand-1.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-1.png)" }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
          <div className="for-mobile">
            <div className="row">
              <div className="col-lg-3">
                <a href="javascript:void(0)">
                  <div
                    className="brand-img"
                    // style="background-image: url(./assets/images/brands/brand-4.png);"
                    style={{ backgroundImage: "url(./assets/images/brands/brand-4.png)" }}
                  ></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <CerVerification />
      <Footer />
    </div>
  );
}

export default Home;
