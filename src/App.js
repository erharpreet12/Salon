import { useEffect, useState, useMemo } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation, BrowserRouter } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";

// Material Kit 2 React routes
import Login from "pages/login/Login";
import UploadCertificate from "pages/uploadCertificate/UploadCertificate";
import Home from "pages/Home";
import CertificateList from "pages/CertificateLIst/CertificateList";

// import routes from "router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/home" element={<Home />} />

        <Route path={"/certificate-list"} element={<CertificateList />} />
        <Route path={"/upload-certificate"} element={<UploadCertificate />} />

        <Route path={"/login"} element={<Login />} />

        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </ThemeProvider>
  );
}
