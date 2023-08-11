// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";
import { logoMain } from "header.routes";
import Icon from "@mui/material/Icon";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Makeup Master",
    image: logoMain,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/CreativeTim/",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/creativetim",
    },
    {
      icon: <GitHubIcon />,
      link: "https://github.com/creativetimofficial",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w",
    },
  ],
  menus: [
    {
      name: "Quick Menu",
      items: [
        { name: "Home", href: "/", icon: <Icon>contactPage</Icon> },
        { name: "Courses", href: "https://www.creative-tim.com/templates/free" },
        { name: "Services", href: "https://www.creative-tim.com/templates/premium" },
        { name: "Gallery", href: "https://www.creative-tim.com/blog" },
        { name: "Certificate Verification", href: "https://www.creative-tim.com/blog" },
        { name: "Contact us", href: "https://www.creative-tim.com/blog" },
      ],
    },
    // {
    //   name: "Contact Us",
    //   items: [
    //     { name: "illustrations", href: "https://iradesign.io/" },
    //     { name: "bits & snippets", href: "https://www.creative-tim.com/bits" },
    //     { name: "affiliate program", href: "https://www.creative-tim.com/affiliates/new" },
    //   ],
    // },
    // {
    //   name: "help & support",
    //   items: [
    //     { name: "contact us", href: "https://www.creative-tim.com/contact-us" },
    //     { name: "knowledge center", href: "https://www.creative-tim.com/knowledge-center" },
    //     { name: "custom development", href: "https://services.creative-tim.com/" },
    //     { name: "sponsorships", href: "https://www.creative-tim.com/sponsorships" },
    //   ],
    // },
    // {
    //   name: "legal",
    //   items: [
    //     { name: "terms & conditions", href: "https://www.creative-tim.com/terms" },
    //     { name: "privacy policy", href: "https://www.creative-tim.com/privacy" },
    //     { name: "licenses (EULA)", href: "https://www.creative-tim.com/license" },
    //   ],
    // },
  ],
  // copyright: (
  //   <MKTypography variant="button" fontWeight="regular">
  //     All rights reserved. Copyright &copy; {date} Material Kit by{" "}
  //     <MKTypography
  //       component="a"
  //       href="https://www.creative-tim.com"
  //       target="_blank"
  //       rel="noreferrer"
  //       variant="button"
  //       fontWeight="regular"
  //     >
  //       Creative Tim
  //     </MKTypography>
  //     .
  //   </MKTypography>
  // ),
};
