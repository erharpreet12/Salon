import React from "react";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="title">
              <h2 className="h2-title wow fadeInLeftBig" data-wow-duration="800ms">
                Services
              </h2>
              <h3 className="h3-title">Explore Our Services</h3>
            </div>
          </div>
        </div>
        <div className="for-desk">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-box wow fadeInLeftBig">
                <div className="service-content">
                  <div
                    className="service-image"
                    // style="background-image: url(./assets/images/banner.jpg);"
                    style={{ backgroundImage: "url(./assets/images/banner.jpg)" }}
                  >
                    <h3 className="number">02</h3>
                  </div>
                  <div className="service-btn">
                    <a href="javascript:void(0)" className="service-tag">
                      Manicure & Pedicure
                    </a>
                    <a href="javascript:void(0)" className="explore">
                      explore
                      <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-box box-1 wow fadeInRightBig">
                <div className="service-content">
                  <div
                    className="service-image"
                    // style="background-image: url(./assets/images/services-3.jpg);"
                    style={{ backgroundImage: "url(./assets/images/services-3.jpg)" }}
                  >
                    <h3 className="number">01</h3>
                  </div>
                  <div className="service-btn">
                    <a href="javascript:void(0)" className="service-tag">
                      Professional Makeup
                    </a>
                    <a href="javascript:void(0)" className="explore">
                      explore
                      <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="for-desk">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-box wow fadeInLeftBig">
                <div className="service-content">
                  <div
                    className="service-image"
                    // style="background-image: url(./assets/images/gallery-img.jpg);"
                    style={{ backgroundImage: "url(./assets/images/gallery-img.jpg)" }}
                  >
                    <h3 className="number">03</h3>
                  </div>
                  <div className="service-btn">
                    <a href="javascript:void(0)" className="service-tag">
                      Facials & Waxing
                    </a>
                    <a href="javascript:void(0)" className="explore">
                      explore
                      <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="services-box box-4 wow fadeInRightBig">
                <div className="service-content">
                  <div
                    className="service-image"
                    // style="background-image: url(./assets/images/about.jpg);"
                    style={{ backgroundImage: "url(./assets/images/about.jpg)" }}
                  >
                    <h3 className="number">04</h3>
                  </div>
                  <div className="service-btn">
                    <a href="javascript:void(0)" className="service-tag">
                      Haircut & Coloring
                    </a>
                    <a href="javascript:void(0)" className="explore">
                      explore
                      <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="for-mobile">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-box box-1 wow fadeInRightBig">
                <div className="service-content">
                  <div
                    className="service-image"
                    // style="background-image: url(./assets/images/services-3.jpg);"
                    style={{ backgroundImage: "url(./assets/images/services-3.jpg)" }}
                  >
                    <h3 className="number">01</h3>
                  </div>
                  <div className="service-btn">
                    <a href="javascript:void(0)" className="service-tag">
                      Professional Makeup
                    </a>
                    <a href="javascript:void(0)" className="explore">
                      explore
                      <span>
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
