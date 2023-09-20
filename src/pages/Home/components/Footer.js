import React, { useMemo } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Stack } from "@mui/material";

const Footer = () => {
  // const { isLoaded } = useJsApiLoader({
  //   id: "google-map-script",
  //   googleMapsApiKey: "AIzaSyDSJz-04yncsAazGXyQUqKw9Uls8OrYQhY",
  // });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDSJz-04yncsAazGXyQUqKw9Uls8OrYQhY",
  });
  const center = useMemo(() => ({ lat: 31.127757181127635, lng: 75.9497745176544 }), []);
  // 31.128478290444775, 75.9497785

  // 31.127757181127635, 75.9497745176544
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {!isLoaded ? (
                <h1>Loading...</h1>
              ) : (
                <Stack style={{ height: "100%", justifyContent: "flex-end" }}>
                  <GoogleMap
                    mapContainerClassName="map-container"
                    center={center}
                    zoom={16}
                    mapContainerStyle={{ height: "80%", width: "100%" }}
                  >
                    <Marker
                      position={{ lat: 31.127757181127635, lng: 75.9497745176544 }}
                      label="Makeup Master Salon & Academy"
                    />
                  </GoogleMap>
                </Stack>
              )}
            </div>
            <div className="col-lg-6">
              <div className="contact-form wow fadeInRightBig" id="contact">
                <div className="title">
                  <h2 className="h2-title">Contact</h2>
                  <h3 className="h3-title">Get in Touch</h3>
                </div>
                <div role="form" className="wpcf7" id="wpcf7-f22-o1" lang="en-US" dir="ltr">
                  <div className="screen-reader-response"></div>
                  <form className="wpcf7-form">
                    <div style={{ display: "none" }}>
                      <input type="hidden" name="_wpcf7" value="22" />
                      <input type="hidden" name="_wpcf7_version" value="5.1.7" />
                      <input type="hidden" name="_wpcf7_locale" value="en_US" />
                      <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f22-o1" />
                      <input type="hidden" name="_wpcf7_container_post" value="0" />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <span className="wpcf7-form-control-wrap full-name">
                          <input
                            type="text"
                            name="full-name"
                            value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-input"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Name*"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <span className="wpcf7-form-control-wrap your-email">
                          <input
                            type="email"
                            name="your-email"
                            value=""
                            size="40"
                            className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-input"
                            aria-required="true"
                            aria-invalid="false"
                            placeholder="Your Email*"
                          />
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <span className="wpcf7-form-control-wrap your-message">
                          <textarea
                            name="your-message"
                            cols="40"
                            rows="10"
                            className="wpcf7-form-control wpcf7-textarea form-input"
                            aria-invalid="false"
                            placeholder="Your Message"
                          ></textarea>
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="submit-btn">
                          <button type="submit" className="sec-btn sm-btn">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="wpcf7-response-output wpcf7-display-none"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="copyright">Copyright © 2023 Makeup Master. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
