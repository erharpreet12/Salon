import React from "react";

const Courses = () => {
  return (
    <section className="price" id="price">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="price-frame wow fadeInLeftBig">
              <div
                className="price-img"
                // style="background-image: url(./assets/images/element5-digital-ooPx1bxmTc4-unsplash.jpg);"
                style={{
                  backgroundImage: "url(./assets/images/element5-digital-ooPx1bxmTc4-unsplash.jpg)",
                }}
              ></div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="title">
              <h2 className="h2-title wow fadeInRightBig" data-wow-duration="800ms">
                Courses
              </h2>
              {/* <h3 className="h3-title">Haircut</h3> */}
            </div>
            <div className="for-desk">
              <div className="row">
                <div className="col-lg-6">
                  <div className="price-box wow zoomIn" data-wow-duration="500ms">
                    <img src="./assets/images/icons/hair-cut&blow-dry.png" alt="Hair Cut" />
                    <h3>Hair Dressing</h3>
                    <div className="hover">
                      {/* <a href="javascript:void(0)" className="price-tag">
                        $18.9
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="price-box wow zoomIn" data-wow-duration="800ms">
                    <img src="./assets/images/icons/brush.png" alt="Blow Dry" />
                    <h3>Makeup</h3>
                    <div className="hover">
                      {/* <a href="javascript:void(0)" className="price-tag">
                        $18.9
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="price-box wow zoomIn" data-wow-duration="1100ms">
                    <img src="./assets/images/icons/nail.png" alt="Color Highlights" />
                    <h3>Nail Art</h3>
                    <div className="hover">
                      {/* <a href="javascript:void(0)" className="price-tag">
                        $18.9
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="price-box wow zoomIn" data-wow-duration="1400ms">
                    <img src="./assets/images/icons/spa.png" alt="Shampoo" />
                    <h3>Pedicure & Manicure</h3>
                    <div className="hover">
                      {/* <a href="javascript:void(0)" className="price-tag">
                        $18.9
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="for-mobile">
              <div className="row">
                <div className="col-lg-6">
                  <div className="price-box wow fadeInLeftBig">
                    <img src="./assets/images/icons/hair-cut&blow-dry.png" alt="Hair Cut" />
                    <h3>Facials</h3>
                    <div className="hover">
                      {/* <a href="javascript:void(0)" className="price-tag">
                        $18.9
                      </a> */}
                    </div>
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

export default Courses;
