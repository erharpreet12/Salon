// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import Icon from "@mui/material/Icon";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";

function DefaultNavbarDropdown({
  name,
  icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,

  ...rest
}) {
  const navigate = useNavigate();
  const auth = getAuth();

  const linkComponent = {
    component: "a",
    href,
    target: "_blank",
    rel: "noreferrer",
  };
  let actionData = useLocation();
  console.log("actionData", actionData);

  const routeComponent = {
    component: Link,
    to: route,
  };

  return (
    <>
      <Stack
        {...rest}
        mx={1}
        p={1}
        flexDirection={"row"}
        color={light ? "white" : "dark"}
        opacity={light ? 1 : 0.6}
        sx={{
          cursor: "pointer",
          userSelect: "none",
          // backgroundColor: "blue",
          justifyContent: "center",
        }}
        {...(route && routeComponent)}
        {...(href && linkComponent)}
        onClick={() => {
          if (name === "Logout") {
            console.log("anfkqewfnkl");
            Swal.fire({
              title: "Do you want to logout?",
              showDenyButton: true,
              // showCancelButton: true,
              confirmButtonText: "Yes",
              denyButtonText: `No`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                Swal.fire("Logged out successfully!", "", "success");
                signOut(auth);
                navigate("/login", { replace: true });
              } else if (result.isDenied) {
              }
            });
          }
        }}
      >
        {/* <Icon style={{ height: 20 }}>{icon}</Icon> */}

        <MKTypography
          fontWeight={actionData.pathname === route ? "bold" : "regular"}
          textTransform="capitalize"
          color={actionData.pathname === route ? "red" : ""}
          // color={actionData.pathname === route ? "#73918f" : ""}
          sx={{
            fontWeight: "100%",

            color: actionData.pathname === route ? "Black" : "",
            // backgroundColor: "red",
            fontSize: 17,
          }}
        >
          {name}
        </MKTypography>
        {/* <MKTypography variant="body2" color={light ? "white" : "dark"} ml="auto">
          <Icon sx={{ fontWeight: "normal", verticalAlign: "middle" }}>
            {collapse && "keyboard_arrow_down"}
          </Icon>
        </MKTypography> */}
      </Stack>
      {/* {children && (
        <Collapse in={Boolean(collapseStatus)} timeout={400} unmountOnExit>
          {children}
        </Collapse>
      )} */}
    </>
  );
}

// Setting default values for the props of DefaultNavbarDropdown
DefaultNavbarDropdown.defaultProps = {
  children: false,
  collapseStatus: false,
  light: false,
  href: "",
  route: "",
};

// Typechecking props for the DefaultNavbarDropdown
DefaultNavbarDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;
