// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import bgImage from "assets/images/About.jpg";
import MKTypography from "components/MKTypography";
import MKBox from "components/MKBox";
import DefaultCounterCard from "examples/Cards/CounterCards/DefaultCounterCard";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

function GalleryCard() {
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
                minHeight="60vh"
                minWidth="80vw"
                // width="100%"
                sx={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  width: "100%",
                  display: "grid",
                  placeItems: "center",
                }}
              ></MKBox>
            </Grid>
          </Stack>

          {/* <Stack
            style={{
              width: "100%",
              marginRight: 15,
              marginLeft: "10%",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              style={{ marginTop: 2, marginBottom: 10, color: "#feb0b2" }}
            >
              Welcome to
            </Typography>
            <Typography variant="h2" component="h2" style={{ marginTop: 1, marginBottom: 5 }}>
              MAKEUP MASTER
            </Typography>
            <Stack
              sx={{
                mx: "auto",
                // width: "90%",
              }}
            >
              <Typography variant="h6" component="h2" style={{ marginTop: 1, marginBottom: 5 }}>
                The Makeup Master salon is an indulgent, luxurious total beauty experience. The
                Beauty Lounge offers a new class of unique and high-end beauty services irrespective
                of gender or age. But it just does not stop here. We not only provide beauty, Spa,
                and hair services to our clients but also create professionals and experts who move
                on to become top-rated beauticians, hair stylists, skin care specialists,
                therapists, or maybe an entrepreneur. The Monika's Art Nails Academy & Nails Studio
                is committed to creating professionals who accomplish pinnacles of financial and
                professional success. The beauty Academy is committed to serving as one of the best
                academies in the beauty industry. Our expert faculties have years of experience in
                teaching at renowned beauty and hair institutes in the country with multiple
                accreditation and certificates to their name. Every course has been researched and
                designed with theory and practical sessions in a manner where students are taught to
                become employable. They get to learn the best practices followed in the beauty and
                salon industry, the best techniques used, best-in-class knowledge, hands-on
                experience, and skills in minute details related to hair and beauty treatments
              </Typography>
            </Stack>
          </Stack> */}
        </Stack>
      </Card>
    </MKBox>
  );
}

export default GalleryCard;
