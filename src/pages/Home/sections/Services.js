import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import bgImage from "assets/images/Services2.jpg";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import { Box, Stack, Tab, Tabs } from "@mui/material";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

import Card from "@mui/material/Card";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function Services() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MKBox component="section" py={3}>
      <Card style={{ padding: 10 }}>
        <Grid
          container
          sx={{ flexDirection: { xs: "column", md: "row" }, paddingBlock: "2%" }}
          columnGap={10}
          rowGap={5}
        >
          {/* <Stack width="100%" flexDirection={"row"} height={"100%"} marginBottom={2} marginTop={2}> */}
          <Stack height={"50%"} justifyContent={"center"} style={{ flex: 1 }}>
            {/* <Stack item xs={8} height={"30vh"} alignItems={"center"}> */}
            <MKBox
              minHeight="40vw"
              maxWidth="40vw"
              sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                // width: "80vh",
                display: "grid",
                placeItems: "center",
              }}
            ></MKBox>
            {/* </Stack> */}
          </Stack>

          <Stack
            style={{
              paddingInline: "1%",
            }}
          >
            <Typography variant="h2" component="h2" style={{ marginTop: 2, marginBottom: 10 }}>
              Services
            </Typography>

            <MKTypography
              color="text"
              sx={{ typography: { sm: "body1", xs: "body2" }, width: "90%" }}
            >
              Check our professional services as they are made for you.to enhance your beauty
            </MKTypography>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 4,
                width: "85%",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                // indicatorColor={"red"}
                textColor="inherit"
                style={{
                  color: "secondary",
                  backgroundColor: "secondary",
                  padding: "2%",
                  textOrientation: { xs: "vertical", md: "horizonal" },
                  minWidth: "100%",
                }}
                sx={{ textOrientation: { xs: "vertical", md: "horizonal" } }}
              >
                <Tab style={{ margin: 3 }} label="Bridal Studio" />
                <Tab style={{ margin: 3 }} label="Nail Studio" />
                <Tab style={{ margin: 3 }} label="Hair" />
                <Tab style={{ margin: 3 }} label="Skin and Estheties" />
                <Tab style={{ margin: 3 }} label="Extension" />
              </Tabs>
            </Stack>

            <Stack
              sx={{
                mx: "auto",
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              {/* Bridal Studio */}
              <CustomTabPanel value={value} index={0}>
                <Stack
                  sx={{
                    mx: "auto",
                    // width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {BrideStudioLine1.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {BrideStudioLine2.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CustomTabPanel>
              {/* Nail */}
              <CustomTabPanel value={value} index={1}>
                <Stack
                  sx={{
                    mx: "auto",
                    // width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {NailLine1.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {NailStudioLine2.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CustomTabPanel>
              {/* Hair */}
              <CustomTabPanel value={value} index={2}>
                <Stack
                  sx={{
                    mx: "auto",
                    // width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {HAIRLine1.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {HAIRLine2.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CustomTabPanel>
              {/* Skin */}
              <CustomTabPanel value={value} index={3}>
                <Stack
                  sx={{
                    mx: "auto",
                    // width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {SKINLine1.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    {SKINLine2.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CustomTabPanel>
              {/* Extension */}
              <CustomTabPanel value={value} index={4}>
                <Stack
                  sx={{
                    mx: "auto",
                    // width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    flex: 1,
                  }}
                >
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Typography variant="h6" component="h2" margin={2}>
                      Clip-On Extensions
                    </Typography>
                    {EXTENSIONLine1.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                  <Stack alignItems={"flex-start"} justifyContent={"flex-start"}>
                    <Typography variant="h6" component="h2" margin={2}>
                      Permanent Extensions
                    </Typography>
                    {EXTENSIONLine2.map((data) => (
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        margin={2}
                      >
                        <KeyboardArrowRight></KeyboardArrowRight>
                        <Typography variant="h6" component="h2">
                          {data.field}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CustomTabPanel>
            </Stack>
          </Stack>
          {/* </Stack> */}
        </Grid>
      </Card>
    </MKBox>
  );
}

export default Services;

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
const BrideStudioLine1 = [
  {
    id: 1,
    field: "PARTY MAKE UP",
  },
  {
    id: 2,
    field: "COCKTAIL MAKUP",
  },
  {
    id: 3,
    field: "GLOSSY MAKEUP",
  },
  {
    id: 4,
    field: "FANTASY MAKEUP",
  },
  {
    id: 5,
    field: "RETRO MAKEUP",
  },
  {
    id: 6,
    field: "RED CARPET MAKE UP",
  },
  {
    id: 7,
    field: " MEHENDI LOOK",
  },
];
const BrideStudioLine2 = [
  {
    id: 1,
    field: "GLAM MAKE UP",
  },
  {
    id: 2,
    field: "TRADITIONAL BRIDAL MAKEOVER",
  },
  {
    id: 3,
    field: "MODERN BRIDAL MAKUP",
  },
  {
    id: 4,
    field: "PREMIUM BRIDAL MAKEUP",
  },
  {
    id: 5,
    field: "HD BRIDAL MAKEUP",
  },
  {
    id: 6,
    field: " AIRBRUSH MAKEUP",
  },
  {
    id: 7,
    field: " MEDIA MAKE UP",
  },
];
const NailLine1 = [
  {
    id: 1,
    field: "BASIC NAIL ART",
  },
  {
    id: 2,
    field: "NAIL ART WITH ACCESSORIES",
  },
  {
    id: 3,
    field: "AGRYLIC NATURAL EXTENSIONS",
  },
  {
    id: 4,
    field: "GELL NATURAL EXTENSION",
  },
  {
    id: 5,
    field: "TIC TOK EXTENSION",
  },
  {
    id: 6,
    field: "FRENCH EXTENSION",
  },
  {
    id: 7,
    field: "GLITTER EXTENSION",
  },
];
const NailStudioLine2 = [
  {
    id: 1,
    field: "NAIL JEWELLERY",
  },
  {
    id: 2,
    field: "3-D NAIL ART",
  },
  {
    id: 3,
    field: "OMBRE NAIL",
  },
  {
    id: 4,
    field: "CHOROME NAIL ART",
  },
  {
    id: 5,
    field: "ANIMAL PRINT NAILS",
  },
  {
    id: 6,
    field: "NAIL PIERGING",
  },
  {
    id: 7,
    field: "SNS EXTENSION",
  },
];
const HAIRLine1 = [
  {
    id: 1,
    field: "HAIR CUTS",
  },
  {
    id: 2,
    field: "GLOBAL HAIR COLOR",
  },
  {
    id: 3,
    field: "FASHION SHADES",
  },
  {
    id: 4,
    field: "2-D HAIR COLOR",
  },
  {
    id: 5,
    field: "3- D HAIR COLOR",
  },
  {
    id: 6,
    field: "4-D HAIR COLOR",
  },
  {
    id: 7,
    field: "HIGHLIGHTS",
  },
];
const HAIRLine2 = [
  {
    id: 1,
    field: "HAIR SPA",
  },
  {
    id: 2,
    field: "REBONDING",
  },
  {
    id: 3,
    field: "SMOOTHENING",
  },
  {
    id: 4,
    field: "SILK THERAPY",
  },
  {
    id: 5,
    field: "KERATIN TREATMENT",
  },
  {
    id: 6,
    field: "PLEX TREATMENT",
  },
  {
    id: 7,
    field: "FASHION STYLING",
  },
];
const SKINLine1 = [
  {
    id: 1,
    field: "NOURITING FACIAL CLEANUPS",
  },
  {
    id: 2,
    field: "BLEACHING",
  },
  {
    id: 3,
    field: "HYDRATING FACIALS",
  },
  {
    id: 4,
    field: "FRUIT FACIALS",
  },
  {
    id: 5,
    field: "GOLD FACIALS",
  },
  {
    id: 6,
    field: "WINE FACIALS",
  },
  {
    id: 7,
    field: "MANICURE",
  },
];
const SKINLine2 = [
  {
    id: 1,
    field: "PEDICURE",
  },
  {
    id: 2,
    field: "TEMPORARY FACIAL HAIR",
  },
  {
    id: 3,
    field: "TEMPORARY BODY HAIR REMOVAL",
  },
  {
    id: 4,
    field: "SKIN WHITENING TREATMENT",
  },
  {
    id: 5,
    field: "ANTI TAN TREATMENT",
  },
  {
    id: 6,
    field: "ACNE TREATMENT",
  },
  {
    id: 7,
    field: "PARAFFIN THERAPIES",
  },
];
const EXTENSIONLine1 = [
  {
    id: 1,
    field: "GLOBAL",
  },
  {
    id: 2,
    field: "HIGHLIGHTED",
  },
  {
    id: 3,
    field: "BANGS",
  },
];
const EXTENSIONLine2 = [
  {
    id: 1,
    field: "RING EXTENSIONS",
  },
  {
    id: 2,
    field: "GLUE EXTENSIONS",
  },
  {
    id: 3,
    field: "TAPE EXTENSIONS",
  },
];
