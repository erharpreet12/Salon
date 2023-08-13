import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Stack, Icon, Link, TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";

import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import Testimonials from "pages/Home/sections/Testimonials";

import Download from "../Home/sections/Download";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/mainBack.jpeg";

import { logoMain } from "header.routes";
function Contact() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky relative width="100%" />
      <MKBox
        minHeight="80vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid
            container
            item
            xs={12}
            lg={6}
            justifyContent="center"
            // mx="auto"
          >
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Contact{" "}
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Stack alignItems={"center"} py={4}>
          <Typography color={"pink"}>CONTACT US</Typography>
          <Typography variant="h1">Get in touch</Typography>
          <Typography>Have any question ? we'd love to hear from you</Typography>
          <Stack my={5} direction={"row"} spacing={2}>
            <Stack flex={0.5} justifyContent={"center"}>
              <Link>
                <MKBox component="img" src={logoMain} maxWidth="14rem" mb={2} />
              </Link>

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
            </Stack>
            <Stack flex={0.5} style={{ backgroundColor: "rgb(255 132 132 / 25%)", padding: 20 }}>
              <Typography variant="h3">Book Your Schedule Today!</Typography>

              <Typography>Contact Us Through Form:</Typography>
              <TextField
                id="outlined-basic"
                label="Your Name"
                variant="filled"
                sx={{ marginTop: 2, backgroundColor: "white" }}
                backgroundColor={"white"}
              />
              <TextField
                id="outlined-basic"
                label="Email Address"
                variant="filled"
                sx={{ marginTop: 2, backgroundColor: "white" }}
                backgroundColor={"white"}
              />
              <TextField
                id="outlined-basic"
                label="Message"
                multiline
                rows={4}
                // defaultValue="Default Value"
                variant="filled"
                sx={{ marginTop: 2, backgroundColor: "white" }}
                backgroundColor={"white"}
              />

              <Button variant="contained" style={{ marginBlock: 10, color: "white" }}>
                Send Message
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Testimonials />
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                lg={5}
                my={{ xs: 5, lg: "auto" }}
                mr={{ xs: 0, lg: "auto" }}
                sx={{ textAlign: { xs: "center", lg: "right" } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://twitter.com/intent/tweet?text=Check%20Material%20Design%20System%20made%20by%20%40CreativeTim%20%23webdesign%20%23designsystem%20%23mui5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fmaterial-kit-react"
                  target="_blank"
                  color="twitter"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-twitter" />
                  &nbsp;Tweet
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="facebook"
                  sx={{ mr: 1 }}
                >
                  <i className="fab fa-facebook" />
                  &nbsp;Share
                </MKSocialButton>
                <MKSocialButton
                  component="a"
                  href="https://www.pinterest.com/pin/create/button/?url=https://www.creative-tim.com/product/material-kit-react"
                  target="_blank"
                  color="pinterest"
                >
                  <i className="fab fa-pinterest" />
                  &nbsp;Pin it
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Contact;
