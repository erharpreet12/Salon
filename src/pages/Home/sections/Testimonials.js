// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";
import { Stack } from "@mui/material";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Stack
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">TESTIMONIALS</MKTypography>
          {/* <MKTypography variant="h2" color="info" textGradient mb={2}></MKTypography> */}
          <MKTypography variant="body1" color="text" mb={2}>
            Words from Clients
          </MKTypography>
        </Stack>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Harpreet"
              date="1 day ago"
              review="Excellent services! I was very scared and blank when I came for my Hairdo,but this saloon and obviously Sam Grewal has made me very satisfied! Thank you for the awesome services Sam!© Keep working
              Hard ** **"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Litesh Gandhi"
              date="1 week ago"
              review="Amazing work by all the team and mainly in professional way ..... Special thanks to Sam and harry bro for there excellent work. and make me feel better then everrrrr......"
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Shiwangi Srivastava"
              date="3 weeks ago"
              review="Excellent services by Glamour Villa. I recently went for hair cut which was just what I wanted . It was amazing experience and staff are fab and friendly. Thanks for the pampering. Highly recommend"
              rating={5}
            />
          </Grid>
        </Grid>
        {/* <Divider sx={{ my: 6 }} /> */}
        {/* <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid> */}
      </Container>
    </MKBox>
  );
}

export default Information;
