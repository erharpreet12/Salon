import Card from "@mui/material/Card";
import { Stack, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import MKBox from "components/MKBox";
import bgImage from "assets/images/mainBack.jpeg";
import { useState } from "react";
import ImageUploading from "react-images-uploading";

function UploadCertificate() {
  const [certificateNumber, setcertificateNumber] = useState("");
  const [images, setImages] = useState([]);
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const maxNumber = 1;

  return (
    <>
      <MKBox
        minHeight="100vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Card
          sx={{
            p: 2,

            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
            flex: 0.5,
          }}
        >
          <Stack flex={0.4} style={{ padding: 20, alignItems: "center" }}>
            <Typography variant="h3">Upload Certificate</Typography>

            <TextField
              id="outlined-basic"
              label="Enter certificate number"
              variant="filled"
              sx={{ marginTop: 2, backgroundColor: "white" }}
              backgroundColor={"white"}
              onChange={(event) => setcertificateNumber(event.target.value)}
              value={certificateNumber}
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
                      style={isDragging ? { color: "red" } : undefined}
                      onClick={onImageUpload}
                      {...dragProps}
                    >
                      Click or Drop here
                    </button>
                  )}
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        <button onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>

            {/* <TextField
              id="outlined-basic"
              label="Password"
              variant="filled"
              sx={{ marginTop: 2, backgroundColor: "white" }}
              backgroundColor={"white"}
              onChange={(event) => setPassword(event.target.value)}
            /> */}

            <Button
              variant="contained"
              style={{ marginBlock: 10, color: "white", width: "100%", marginTop: 15 }}
            >
              Upload
            </Button>
          </Stack>
        </Card>
      </MKBox>
    </>
  );
}

export default UploadCertificate;
