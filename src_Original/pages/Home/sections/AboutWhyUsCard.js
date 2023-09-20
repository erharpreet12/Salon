import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import bgImage from "assets/images/Services2.jpg";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import Card from "@mui/material/Card";
import KeyboardArrowRight from "@mui/icons-material/CheckTwoTone";

function AboutWhyUsCard() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MKBox component="section" py={3}>
      <Card style={{ padding: 10 }}>
        <Stack width="100%" alignItems={"center"} height={"100%"} marginBottom={2} marginTop={2}>
          <Typography variant="h6" component="h2" color={"#feb0b2"}>
            Why Us
          </Typography>
          <Typography variant="h2" component="h2" style={{ marginTop: 2, marginBottom: 10 }}>
            Why Choose Us?
          </Typography>
          <MKTypography
            variant="body1"
            color="text"
            style={{
              width: "70%",
              alignItems: "center",
              textAlign: "center",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            We are a salon fully focused to deliver you the best style services in the city. We are
            equipped with the best to give you the perfect experience. Come enjoy a nice day at our
            salon
          </MKTypography>

          <Stack
            sx={{
              mx: "auto",
              width: "100%",
              // flexDirection: "row",
              alignSelf: "center",
              //  justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            {/* Bridal Studio */}

            {/* <Stack
              sx={{
                mx: "auto",
                // width: "60%",
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
              }}
            > */}
            <Grid
              container
              sx={{
                flexDirection: { xs: "column", md: "row" },
                paddingBlock: "2%",
                justifyContent: { md: "center" },
              }}
              columnGap={1}
            >
              <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                {ChooseUs1.map((data) => (
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    marginY={2}
                  >
                    <KeyboardArrowRight style={{ color: "#feb0b2" }}></KeyboardArrowRight>
                    <Typography variant="h5" component="h2" marginLeft={1}>
                      {data.field}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
              <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                {ChooseUs2.map((data) => (
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    marginY={2}
                  >
                    <KeyboardArrowRight
                      style={{ color: "#feb0b2", fontSize: "44" }}
                    ></KeyboardArrowRight>
                    <Typography variant="h5" component="h2" marginLeft={1}>
                      {data.field}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Grid>
            {/* </Stack> */}
          </Stack>
        </Stack>
      </Card>
    </MKBox>
  );
}

export default AboutWhyUsCard;

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const ChooseUs1 = [
  {
    id: 1,
    field: "We keep calm & fun on your special day",
  },
  {
    id: 2,
    field: "We are a very professional team",
  },
  {
    id: 3,
    field: "Quarantee for you who are not satisfied",
  },
];
const ChooseUs2 = [
  {
    id: 1,
    field: "We you pick out the perfect makeup",
  },
  {
    id: 2,
    field: "We are experienced Makeup Artists",
  },
  {
    id: 3,
    field: "Quarantee for you who are not satisfied",
  },
];
