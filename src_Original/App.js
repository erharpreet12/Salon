import { useEffect, useState } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Material Kit 2 React routes
import routes from "routes";
import Login from "pages/login/Login";
import UploadCertificate from "pages/uploadCertificate/UploadCertificate";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  // const theme = {
  //   colors: {
  //     ActiveBackfround: "red",
  //   },
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path={"/login"} element={<Login />} />
        <Route path={"/upload-certificate"} element={<UploadCertificate />} />

        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
