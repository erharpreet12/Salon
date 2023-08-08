/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import bgImage from "assets/images/Services.jpeg";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Button, Stack, ButtonGroup } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import Card from "@mui/material/Card";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function Services() {
  const [isSelect, setSelect] = useState(false);
  return (
    <MKBox component="section" py={3}>
      <Card style={{ padding: 10 }}>
        <Stack width="100%" flexDirection={"row"} height={"100%"} marginBottom={2} marginTop={2}>
          <Stack
            width={"50%"}
            height={"50%"}
            justifyContent={"center"}
            // style={{ backgroundColor: "red" }}
          >
            <Grid item xs={8} width="100%" height={"30%"}>
              <MKBox
                minHeight="100vh"
                // width="100%"
                sx={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "stretch",
                  width: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              ></MKBox>
            </Grid>
          </Stack>

          <Stack
            style={{
              alignItems: "center",
              width: "100%",
              marginRight: 15,
              marginLeft: 15,
            }}
          >
            <Typography variant="h2" component="h2" style={{ marginTop: 2, marginBottom: 10 }}>
              Services
            </Typography>
            <MKTypography variant="body1" color="text">
              Check our professional services as they are made for you.to enhance your beauty
            </MKTypography>
            <Stack
              sx={{
                mx: "auto",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "70%",
              }}
            >
              {/* <ButtonGroup variant="contained" aria-label="outlined primary button group"> */}
              <Button
                variant="contained"
                color={isSelect ? "inherit" : "primary"}
                style={{ margin: 2 }}
                onClick={setSelect}
              >
                One
              </Button>
              <Button
                variant="contained"
                color={isSelect ? "inherit" : "primary"}
                style={{ margin: 2 }}
              >
                Bride Studio
              </Button>
              <Button
                variant="contained"
                color={isSelect ? "inherit" : "primary"}
                style={{ margin: 2 }}
              >
                Nail Studio
              </Button>
              <Button
                variant="contained"
                color={isSelect ? "inherit" : "primary"}
                style={{ margin: 2 }}
              >
                Hair
              </Button>
              <Button
                variant="contained"
                color={isSelect ? "inherit" : "primary"}
                style={{ margin: 2 }}
              >
                Skin and Estheties
              </Button>
              <Button
                variant="contained"
                color={isSelect ? "inherit" : "primary"}
                style={{ margin: 2 }}
              >
                Extension{" "}
              </Button>
              {/* </ButtonGroup> */}
            </Stack>

            <Stack
              sx={{
                mx: "auto",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "70%",
              }}
            >
              <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    PARTY MAKE UP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    COCKTAIL MAKUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    GLOSSY MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    FANTASY MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    RETRO MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    RED CARPET MAKE UP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    MEHENDI LOOK
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    HALDI LOOK
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    GLAM MAKE UP
                  </Typography>
                </Stack>
              </Stack>
              <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    GLAM MAKE UP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    TRADITIONAL BRIDAL MAKEOVER
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    MODERN BRIDAL MAKUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    PREMIUM BRIDAL MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    HD BRIDAL MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    AIRBRUSH MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    MEDIA MAKE UP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    FASHION MAKEUP
                  </Typography>
                </Stack>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  margin={2}
                >
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    ILLUSION MAKEUP
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </MKBox>
  );
}

export default Services;
