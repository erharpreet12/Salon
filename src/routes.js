import Icon from "@mui/material/Icon";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";
import Gallery from "pages/Gallery/Gallery";
import Certificate from "pages/Certificate/Certificate";
import Courses from "pages/Courses/Courses";
import HeadService from "pages/HeadService/HeadService";

const routes = [
  {
    name: "Home",
    icon: <Icon>home</Icon>,
    route: " /presentation",
    columns: 1,
    rowsPerColumn: 2,
  },
  {
    name: "Courses",
    icon: <Icon>article</Icon>,
    route: "/pages/Courses",
    component: <Courses />,
  },
  {
    name: "Services",
    icon: <Icon>article</Icon>,

    route: "/pages/HeadService",
    component: <HeadService />,
  },

  {
    name: "Gallery",
    icon: <Icon>autoAwesomeMosaic</Icon>,
    route: "/pages/Gallery",
    component: <Gallery />,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "Certificate Verification",
    icon: <Icon>article</Icon>,
    route: "/pages/Certificate",
    component: <Certificate />,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "Contact Us",
    icon: <Icon>contactPage</Icon>,
    route: "/pages/Contact",
    component: <Contact />,
  },
  {
    name: "About",
    icon: <Icon>contactPage</Icon>,
    route: "/pages/About",
    component: <About />,
  },
];

export default routes;
