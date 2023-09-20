import Card from "@mui/material/Card";
import { Stack, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import MKBox from "components/MKBox";
import bgImage from "assets/images/mainBack.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "firebase";
import { auth } from "firebase-mn";
import { useDispatch } from "react-redux";
import { setUserData } from "store/User";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("user", user);

        dispatch(
          setUserData({
            loggedIn: user ? true : false,
            userObj: user,
          })
        );

        if (user) {
          navigate("/upload-certificate", { replace: true });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
      });
  };
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
            <Typography variant="h3">Login</Typography>

            <TextField
              id="outlined-basic"
              label="Email"
              variant="filled"
              sx={{ marginTop: 2, backgroundColor: "white", width: 300 }}
              backgroundColor={"white"}
              onChange={(event) => setEmail(event.target.value)}
              // value={email}
            />

            <TextField
              id="outlined-basic"
              label="Password"
              variant="filled"
              sx={{ marginTop: 2, backgroundColor: "white", width: 300 }}
              backgroundColor={"white"}
              onChange={(event) => setPassword(event.target.value)}
            />

            <Button
              variant="contained"
              style={{ marginBlock: 10, color: "white", width: "100%", marginTop: 15 }}
              onClick={() => onSignIn()}
            >
              Login
            </Button>
          </Stack>
        </Card>
      </MKBox>
    </>
  );
}

export default Login;
