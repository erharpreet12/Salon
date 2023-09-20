// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// react-router-dom components
import { Link } from "react-router-dom";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { useLocation } from "react-router-dom";
import { Stack } from "@mui/material";

function DefaultNavbarDropdown({
  name,
  Icon,
  children,
  collapseStatus,
  light,
  href,
  route,
  collapse,

  ...rest
}) {
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
      <MKBox
        {...rest}
        mx={1}
        p={1}
        display="flex"
        alignItems="baseline"
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
      >
        <MKTypography
          // variant="button"
          sx={{
            color: actionData.pathname === route ? "Black" : "",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "100%",
          }}
        >
          {Icon}
        </MKTypography>
        {/* <Stack
         
          sx={{
            color: actionData.pathname === route ? "Black" : "",
            backgroundColor: "red",
          }}
        >
          {icon}
        </Stack> */}
        <MKTypography
          // variant="button"
          // fontWeight="regular"
          fontWeight={actionData.pathname === route ? "bold" : "regular"}
          textTransform="capitalize"
          // color={light ? "white" : "dark"}
          color={actionData.pathname === route ? "red" : ""}
          // color={actionData.pathname === route ? "#73918f" : ""}
          sx={{
            fontWeight: "100%",
            ml: 1,
            mr: 0.25,
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
      </MKBox>
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
  Icon: PropTypes.node.isRequired,
  children: PropTypes.node,
  collapseStatus: PropTypes.bool,
  light: PropTypes.bool,
  href: PropTypes.string,
  route: PropTypes.string,
  collapse: PropTypes.bool.isRequired,
};

export default DefaultNavbarDropdown;