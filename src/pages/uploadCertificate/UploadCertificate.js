import Card from "@mui/material/Card";
import { Stack, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import MKBox from "components/MKBox";
import bgImage from "assets/images/mainBack.jpeg";
import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "firebase-mn";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
// import { CircularProgress } from "@mui/material";
import { OverlayLoader } from "components/SpinnerOverlay";
import Swal from "sweetalert2";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "../../routerMe";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import moment from "moment";
import { isEqual } from "lodash";

function UploadCertificate() {
  const [certificateNumber, setcertificateNumber] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [user, setUser] = useState(null);
  const auth = getAuth();
  onAuthStateChanged(auth, (user1) => {
    if (user1) {
      console.log("userID", user1);
      // setUser(user);
      if (!isEqual(user1, user)) {
        setUser(user1);
      }
      // ...
    } else {
      setUser(null);
    }
  });

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const maxNumber = 1;

  const onUpload = async () => {
    console.log("usersahfdkhwskh1111", moment().isBefore(user?.stsTokenManager?.expirationTime));

    if (certificateNumber === "") {
      Swal.fire({ icon: "error", title: "Oops...", text: "Please enter certificate number" });
      return;
    }
    if (images.length === 0) {
      Swal.fire({ icon: "error", title: "Oops...", text: "Please choose certificate" });
      return;
    }
    setLoading(true);
    const docRef = doc(db, "certificate", certificateNumber);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setLoading(false);
      Swal.fire({ icon: "error", title: "Oops...", text: "Certificate already uploaded" });
      return;
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
      uploadPhoto();
    }
  };

  const uploadPhoto = () => {
    const storageRef = ref(storage, "certificate/certi-" + certificateNumber + ".jpeg");
    const metadata = {
      contentType: "image/jpeg",
    };
    const uploadTask = uploadBytesResumable(storageRef, images[0].file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("snapshot", snapshot);
      },
      (err) => {
        console.log("photoUpload error", err);
        setLoading(false);
      },
      () => {
        // download url
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            console.log("Url", url);
            writeData(url);
          })
          .catch((err) => {
            console.log("getUrl error", err);
            setLoading(false);
          });
      }
    );
  };

  const writeData = (url) => {
    setDoc(doc(db, "certificate", certificateNumber), {
      cNum: certificateNumber,
      cUrl: url,
      createAt: serverTimestamp(),
    })
      .then((data) => {
        console.log("writeData ", data);
        setLoading(false);
        setImages([]);
        setcertificateNumber("");
        Swal.fire({
          icon: "success",
          title: "Certificate uploaded successfully",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        console.log("writeData err", err);
        setLoading(false);
      });
  };

  return (
    <Stack style={{ height: "100vh" }}>
      <DefaultNavbar routes={routes} sticky relative width="100vw" minHeight="20vh" />

      <MKBox
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
          flex: 1,
        }}
      >
        {user ? (
          <Card
            sx={{
              p: 2,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.8),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              flex: 0.6,
            }}
          >
            <Stack flex={1} style={{ padding: 20, alignItems: "center" }}>
              <Typography variant="h3">Upload Certificate</Typography>

              <TextField
                id="outlined-basic"
                label="Enter certificate number"
                variant="filled"
                sx={{ marginTop: 2, backgroundColor: "white" }}
                backgroundColor={"white"}
                onChange={(event) => setcertificateNumber(event.target.value)}
                value={certificateNumber}
                style={{ marginBottom: 15, width: 300 }}
              />

              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  // write your building UI
                  <div className="upload__image-wrapper">
                    {imageList.length === 0 && (
                      <button
                        style={({ flex: 1 }, isDragging ? { color: "red" } : undefined)}
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        Click or Drop here
                      </button>
                    )}
                    &nbsp;
                    {imageList.map((image, index) => (
                      <Stack
                        key={index}
                        // className="image-item"
                        style={{
                          alignItems: "center",
                          justifyContent: "center",
                          rowGap: 4,
                        }}
                      >
                        <img src={image["data_url"]} alt="" width="200" />
                        <Stack
                          style={{
                            flexDirection: "row",
                            marginTop: 5,
                            alignItems: "center",
                            columnGap: 10,
                          }}
                        >
                          <button onClick={() => onImageUpdate(index)} style={{ paddingInline: 5 }}>
                            Update
                          </button>
                          <button onClick={() => onImageRemove(index)} style={{ paddingInline: 5 }}>
                            Remove
                          </button>
                        </Stack>
                      </Stack>
                    ))}
                  </div>
                )}
              </ImageUploading>

              <Button
                variant="contained"
                style={{ marginBlock: 10, color: "white", width: "100%", marginTop: 15 }}
                onClick={onUpload}
              >
                Upload
              </Button>
            </Stack>
          </Card>
        ) : (
          <div>No Content</div>
        )}

        {loading && <OverlayLoader />}
      </MKBox>
    </Stack>
  );
}

export default UploadCertificate;
