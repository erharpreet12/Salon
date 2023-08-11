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
import bgImage from "assets/images/brid.webp";
import bgImagehair from "assets/images/hairco.jpeg";

import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function HairCo() {
  return (
    <MKBox component="section" py={3}>
      <Card style={{ padding: 10 }}>
        <Stack width="100%" flexDirection={"row"} height={"100%"} marginBottom={2} marginTop={2}>
          <Stack
            width={"40%"}
            height={"50%"}
            justifyContent={"center"}
            // style={{ backgroundColor: "red" }}
          >
            <Grid item xs={8} width="100%" height={"30%"}>
              <MKBox
                minHeight="40vh"
                // width="100%"
                sx={{
                  backgroundImage: `url(${bgImagehair})`,
                  backgroundSize: "cover",
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
              Advance Hair Dressing
            </Typography>
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
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Advance Diploma In Cosmetology
                  </Typography>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Advance Hair
                  </Typography>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Advance Hair Cutting
                  </Typography>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Make-up Artistry
                  </Typography>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Personal Grooming
                  </Typography>
                </Stack>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Advance Hair Styling
                  </Typography>
                </Stack>
              </Stack>
              <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Nail Technology & Artistry
                  </Typography>
                </Stack>
                {/* <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Product Knowledge
                  </Typography>
                </Stack> */}
                {/* <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Engagement Makeup
                  </Typography>
                </Stack> */}
                {/* <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Reception Makeup
                  </Typography>
                </Stack> */}
                {/* <Stack flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
                  <KeyboardArrowRight></KeyboardArrowRight>
                  <Typography variant="h5" component="h2">
                    Bridal Makeup
                  </Typography>
                </Stack> */}
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Card>
    </MKBox>
  );
}

export default HairCo;
