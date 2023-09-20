import React from "react";

const About = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="about-content wow fadeInLeftBig">
              <h2 className="h2-title" data-wow-duration="1000ms">
                about us
              </h2>
              <h3 className="h3-title">our history</h3>
              <div className="overflow-text">
                <p>
                  Makeup Master salon & Academy is a one-stop destination that helps you to ace the
                  skills of the beauty industry. Makeup Master stepped into the industry with a
                  strong determination to deliver the best service when it comes to beauty and
                  wellness. Perfection and timely delivery helped us to climb the ladder. To offer a
                  range of professional training courses on beauty, hair, and make-up. The courses
                  are aligned with the Industry standards and tailored based on individual needs. It
                  arms students with the right technical skills, effective communication techniques,
                  and client management skills. The academy also provides hands-on training along
                  with an opportunity to work at Naturals chain of salons. Makeup Master Academy
                  offers a range of courses from foundation level to Master on specialized subjects.
                  Makeup Master Academy gives you the provision to opt from customized courses on
                  skin, hair, and make-up based on individual requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="about-frame wow fadeInRightBig">
              <div
                className="about-image"
                style={{ backgroundImage: "url(./assets/images/about.jpg)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
