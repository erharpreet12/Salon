import { Stack } from "@mui/material";
import MKBox from "components/MKBox";
import bgImage from "assets/images/mainBack.jpeg";
import { useState } from "react";
import { db } from "firebase-mn";
import { OverlayLoader } from "components/SpinnerOverlay";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "../../routerMe";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

import { isEqual } from "lodash";
function CertificateList() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [search, setSearch] = useState("");
  const [certificateURL, setcertificateURL] = useState("");

  const auth = getAuth();
  onAuthStateChanged(auth, (user1) => {
    if (user1) {
      console.log("userID", user1);
      if (!isEqual(user1, user)) {
        setUser(user1);
      }
      // ...
    } else {
      setUser(null);
    }
  });

  // useEffect(() => {
  //   getList();
  // }, []);
  // const getList = async () => {
  //   // const citiesRef = collection(db, "certificate");
  //   const first = query(collection(db, "certificate"), limit(2));
  //   const documentSnapshots = await getDocs(first);

  //   // const docSnap = await getDoc(doc(citiesRef));
  //   console.log("docSnap", documentSnapshots);
  //   let array = [];
  //   documentSnapshots.forEach((docs) => {
  //     array.push(docs.data());
  //   });
  //   setcertificates(array);
  //   console.log("array", JSON.stringify(array));
  // };

  // const certiList = useMemo(() => certificates.map((item) => itemList(item)), [certificates]);

  const onSearch = async () => {
    if (search === "") {
      Swal.fire({ icon: "error", title: "Oops...", text: "Please enter certificate number" });
      return;
    }
    setLoading(true);
    const docRef = doc(db, "certificate", search);
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
  };

  return (
    <Stack style={{ height: "100vh" }}>
      <DefaultNavbar routes={routes} sticky relative width="100vw" minHeight="20vh" />

      <MKBox
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          flex: 1,
          placeItems: "center",
          display: "grid",
        }}
      >
        {user ? (
          <>
            <Stack sx={{ alignItems: "center", gap: 2, marginTop: 10 }}>
              <Search style={{ width: 400 }}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search number"
                  // inputProps={{ "aria-label": "search" }}
                  style={{ width: "100%" }}
                  onChange={(event) => {
                    setSearch(event.target.value);
                    if (certificateURL !== "") {
                      setcertificateURL("");
                    }
                  }}
                />
              </Search>
              <button onClick={onSearch} className="sec-btn sm-btn">
                Search
              </button>
            </Stack>

            <Stack sx={{ marginTop: 5, marginBottom: 5 }}>
              <img className="img" src={certificateURL} />
            </Stack>

            {/* <Pagination
              variant="outlined"
              onPageChange={(event, newPage) => console.log("dsaf", newPage)}
            /> */}

            {loading && <OverlayLoader />}
          </>
        ) : (
          <div>No content</div>
        )}
      </MKBox>
    </Stack>
  );
}

export default CertificateList;

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
