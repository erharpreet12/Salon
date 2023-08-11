import Icon from "@mui/material/Icon";
import About from "pages/About/About";
import Contact from "pages/Contact/Contact";

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
  },
  {
    name: "Services",
    icon: <Icon>article</Icon>,
  },

  {
    name: "Gallery",
    icon: <Icon>autoAwesomeMosaic</Icon>,
    // href: "https://www.github.com/creativetimofficial/material-kit-react",
  },
  {
    name: "Certificate Verification",
    icon: <Icon>article</Icon>,
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
