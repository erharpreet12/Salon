import Icon from "@mui/material/Icon";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";
import Gallery from "pages/Gallery/Gallery";
import Certificate from "pages/Certificate/Certificate";
import Courses from "pages/Courses/Courses";
import HeadService from "pages/HeadService/HeadService";
import theme from "assets/theme";
import GridViewIcon from "@mui/icons-material/GridView";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

// import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
// import theme from "assets/theme";
import Home from "pages/Home";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: "/home",
    component: <Home />,
  },
  {
    name: "Courses",
    icon: <Icon>article</Icon>,
    route: "/courses",
    component: <Courses />,
  },
  {
    name: "Services",
    // icon: <Icon>faceRetouchingNatural</Icon>,
    icon: <GridViewIcon></GridViewIcon>,
    route: "/service",
    component: <HeadService />,
  },
  {
    name: "Gallery",
    icon: <Icon>collections</Icon>,
    route: "/gallery",
    component: <Gallery />,
  },
  {
    name: "Certificate Verification",
    icon: <Icon>verifiedUser</Icon>,
    route: "/certificate",
    component: <Certificate />,
  },
  {
    name: "Contact Us",
    icon: <PermContactCalendarIcon></PermContactCalendarIcon>,
    route: "/contact",
    component: <Contact />,
  },
  {
    name: "About",
    icon: <Icon>info</Icon>,
    route: "/about",
    component: <About />,
  },
];

export default routes;
