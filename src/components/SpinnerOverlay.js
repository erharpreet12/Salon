import React from "react";
// import styled from "styled-components";
import { CircularProgress } from "@mui/material";

// export const OverlayLoaderWrapper = styled.div`
//   position: absolute;
//   display: flex;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   background-color: rgba(255, 255, 255, 0.6);
//   justify-content: center;
//   z-index: 100;
// `;

export const OverlayLoader = () => (
  <div
    style={{
      position: "absolute",
      display: "flex",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: "rgba(255, 255, 255, 0.6)",
      justifyContent: "center",
      zIndex: 100,
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </div>
);
