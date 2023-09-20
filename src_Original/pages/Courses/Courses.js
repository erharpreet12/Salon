import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Stack } from "@mui/material";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import AboutWelcomeCard from "../Home/sections/AboutWelcomeCard";

import HairCo from "../Home/sections/HairCo";
import AboutWhyUsCard from "../Home/sections/AboutWhyUsCard";
import Services from "pages/Home/sections/Services";
import Testimonials from "pages/Home/sections/Testimonials";

import Download from "../Home/sections/Download";
import GalleryCard from "pages/Home/sections/GalleryCard";
import CoursesCard from "pages/Home/sections/CoursesCard";

// Presentation page components
import BuiltByDevelopers from "../Home/components/BuiltByDevelopers";
// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/mainBack.jpeg";

function Courses() {
  return (
    <>
      {/* <MKBox width="100%"> */}
      <DefaultNavbar routes={routes} sticky relative width="100%" />
      {/* </MKBox> */}
      {/* <Container>
        <DefaultNavbar routes={routes} sticky relative width="100%" />
      </Container> */}
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
              Courses{" "}
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
        <CoursesCard />
        {/* <HairCo /> */}
        {/* <AboutWhyUsCard /> */}
        {/* <Information />
        <DesignBlocks />
        <Pages /> */}
        {/* <Container sx={{ mt: 2 }}>
          <BuiltByDevelopers />
        </Container> */}
        {/* <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Getting Started"
                description="Check the possible ways of working with our product and the necessary files for building your own project."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/material-kit/",
                  label: "Let's start",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Plugins"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/overview/datepicker/",
                  label: "Read more",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Components"
                description="Material Kit is giving you a lot of pre-made components, that will help you to build UI's faster."
                action={{
                  type: "external",
                  route: "https://www.creative-tim.com/learning-lab/react/alerts/material-kit/",
                  label: "Read more",
                }}
              />
            </Grid>
          </Grid>
        </Container> */}
        {/* <Testimonials /> */}
        <Download />
        <MKBox pt={18} pb={6}>
          <Container>
            <Grid
              container
              sx={{
                flexDirection: { xs: "column", md: "row" },
                paddingBlock: "2%",
              }}
              columnGap={1}
              rowGap={5}
            >
              <MKSocialButton component="a" target="_blank" color="twitter" sx={{ mr: 1 }}>
                <i className="fab fa-twitter" />
                &nbsp;Tweet
              </MKSocialButton>
              <MKSocialButton component="a" target="_blank" color="facebook" sx={{ mr: 1 }}>
                <i className="fab fa-facebook" />
                &nbsp;Share
              </MKSocialButton>
              <MKSocialButton component="a" target="_blank" color="pinterest">
                <i className="fab fa-pinterest" />
                &nbsp;Pin it
              </MKSocialButton>
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

export default Courses;
