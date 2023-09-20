import React, { useState } from "react";
import Swal from "sweetalert2";
import { doc, getDoc } from "firebase/firestore";
import { db } from "firebase-mn";
import { Stack } from "@mui/material";
import { OverlayLoader } from "components/SpinnerOverlay";

const CerVerification = () => {
  const [certificateNumber, setCertificateNumber] = useState("");
  const [certificateURL, setcertificateURL] = useState("");
  const [loading, setLoading] = useState(false);

  const onSearch = async () => {
    if (certificateNumber === "") {
      Swal.fire({ icon: "error", title: "Oops...", text: "Please enter certificate number" });
      return;
    }
    try {
      setLoading(true);

      const docRef = doc(db, "certificate", certificateNumber);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setcertificateURL(docSnap.data().cUrl);
        setLoading(false);
        return;
      } else {
        Swal.fire({ icon: "error", title: "Oops...", text: "Certificate not exit" });

        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    } catch (error) {
      console.log("error", error);

      setLoading(false);
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div style={{ alignItems: "center" }}>
            <div className="contact-form wow fadeInRightBig" id="certificate-verification">
              {/* <div className="title col-lg-12 text-center">
                <h2 className="h2-title">Verification</h2>
                <h3 className="h3-title">Certificate Verification</h3>
              </div> */}
              <div className="row">
                <div className="col-lg-12 text-center">
                  <div className="title">
                    <h2 className="h2-title wow zoomIn" data-wow-duration="800ms">
                      Verification
                    </h2>
                    <h3 className="h3-title ">Certificate Verification</h3>
                  </div>
                </div>
              </div>
              <div role="form" className="wpcf7" id="wpcf7-f22-o1" lang="en-US" dir="ltr">
                <div className="screen-reader-response"></div>
                {/* <form className="wpcf7-form" novalidate="novalidate"> */}
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
                        name="Enter certificate code"
                        value={certificateNumber}
                        size="40"
                        className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-input"
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Enter certificate code*"
                        onChange={(eveent) => setCertificateNumber(eveent.target.value)}
                      />
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="submit-btn">
                      <button
                        className="sec-btn sm-btn"
                        onClick={
                          certificateURL !== ""
                            ? () => {
                                setCertificateNumber("");
                                setcertificateURL("");
                              }
                            : onSearch
                        }
                      >
                        {certificateURL !== "" ? "Clear" : "Search"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="wpcf7-response-output wpcf7-display-none"></div>
                {/* </form> */}

                <Stack sx={{ marginTop: 5, marginBottom: 5 }}>
                  <img className="img" src={certificateURL} />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <OverlayLoader />}
    </footer>
  );
};
export default CerVerification;
