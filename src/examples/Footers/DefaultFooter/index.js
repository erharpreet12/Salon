/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { Stack } from "@mui/material";
import Icon from "@mui/material/Icon";
import { useLocation } from "react-router-dom";

function DefaultFooter({ content }) {
  const { brand, socials, menus, copyright } = content;
  let actionData = useLocation();
  console.log("actionData", actionData);
  return (
    <MKBox component="footer" mb={10}>
      <Container>
        <Stack direction={"row"} spacing={20}>
          <Stack>
            <MKBox>
              <Link to={brand.route}>
                <MKBox component="img" src={brand.image} alt={brand.name} maxWidth="2rem" mb={2} />
              </Link>
              <MKTypography variant="h6">{brand.name}</MKTypography>
            </MKBox>
            <MKBox display="flex" alignItems="center" mt={3}>
              {socials.map(({ icon, link }, key) => (
                <MKTypography
                  key={link}
                  component="a"
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  variant="h5"
                  color="dark"
                  opacity={0.8}
                  mr={key === socials.length - 1 ? 0 : 2.5}
                >
                  {icon}
                </MKTypography>
              ))}
            </MKBox>
          </Stack>

          {menus.map(({ name: title, items }) => (
            <Grid key={title} item xs={6} md={2} sx={{ mb: 3 }}>
              <MKTypography
                display="block"
                variant="button"
                fontWeight="bold"
                textTransform="capitalize"
                mb={1}
              >
                {title}
              </MKTypography>
              <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
                {items.map(({ name, route, href }) => (
                  <MKBox key={name} component="li" p={0} m={0} lineHeight={1.25}>
                    {href ? (
                      <MKTypography
                        component="a"
                        href={route}
                        // target="_blank"
                        rel="noreferrer"
                        variant="button"
                        // fontWeight="regular"
                        textTransform="capitalize"
                        // color={actionData.pathname === route ? "#73918f" : ""}
                        fontWeight={actionData.pathname === route ? "bold" : "regular"}
                        color={actionData.pathname === route ? "#FF0000" : ""}
                      >
                        {name}
                      </MKTypography>
                    ) : (
                      <MKTypography
                        component={Link}
                        to={route}
                        variant="button"
                        // fontWeight="regular"
                        textTransform="capitalize"
                        fontWeight={actionData.pathname === route ? "bold" : "regular"}
                        sx={{ color: actionData.pathname === route ? "Black" : "" }}
                        // color={actionData.pathname === route ? "#FF0000" : ""}
                      >
                        {name}
                      </MKTypography>
                    )}
                  </MKBox>
                ))}
              </MKBox>
            </Grid>
          ))}

          <Grid item xs={6} md={2} sx={{ mb: 3 }}>
            <MKTypography
              display="block"
              variant="button"
              fontWeight="bold"
              textTransform="capitalize"
              mb={1}
            >
              {"Contact Us"}
            </MKTypography>
            <MKBox component="ul" p={0} m={0} sx={{ listStyle: "none" }}>
              <Stack direction={"row"} alignItems={"center"} py={1} spacing={1}>
                <Icon color="black">place</Icon>
                <MKTypography variant="button" fontWeight="regular" textTransform="capitalize">
                  {"Banga road mukandpur, Mukandpur, Punjab, India, 144507"}
                </MKTypography>
              </Stack>

              <Stack direction={"row"} alignItems={"center"} py={1} spacing={1}>
                <Icon color="black">email</Icon>
                <MKTypography variant="button" fontWeight="regular" textTransform="capitalize">
                  {"makeupmaster@gmail.com"}
                </MKTypography>
              </Stack>
              <Stack direction={"row"} alignItems={"center"} py={1} spacing={1}>
                <Icon color="black">phone</Icon>
                <MKTypography variant="button" fontWeight="regular" textTransform="capitalize">
                  {"+9178889 06529"}
                </MKTypography>
              </Stack>
            </MKBox>
          </Grid>

          <Grid item xs={12} sx={{ textAlign: "center", my: 3 }}>
            {copyright}
          </Grid>
        </Stack>
      </Container>
    </MKBox>
  );
}

// Typechecking props for the DefaultFooter
DefaultFooter.propTypes = {
  content: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.object, PropTypes.array])).isRequired,
};

export default DefaultFooter;
