import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <>
      <Grid item xs={12} sm={3} sx={{ display: "flex", gap: 2 }}>
        <Box
          component="img"
          src="TU.jpg"
          alt="Tribhuvan University Logo"
          sx={{
            width: "100px",
            height: "100px",
            marginLeft: "100px",
          }}
        />

        <Box
          sx={{
            mx: "auto",
            textAlign: "center",
            color: "#024282",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            mt: 0,
          }}
        >
          <Typography variant="body2" sx={{ fontSize: { lg: "0.75rem" } }}>
            त्रिभुवन विश्वविद्यालयबाट सम्बन्धन प्राप्त
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { lg: "0.75rem" } }}>
            Affiliated to Tribhuwan University
          </Typography>

          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", lg: "1rem" },
              fontFamily: "'Noto Sans Devanagari', sans-serif",
            }}
          >
            नेपालगञ्ज बहुमुखी क्याम्पस
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1rem", lg: "1rem" },
            }}
          >
            NEPALGUNJ MULTIPLE CAMPUS
          </Typography>

          <Typography variant="body2" sx={{ fontSize: { lg: "0.75rem" } }}>
            नेपालगञ्ज, बाँके
          </Typography>
          <Typography variant="body2" sx={{ fontSize: { lg: "0.75rem" } }}>
            Nepalgunj, Banke
          </Typography>
        </Box>

        <Box
          component="img"
          src="https://media.tenor.com/MCKjaHTU0kwAAAAj/nepal.gif"
          alt="Nepal Flag Animation"
          sx={{
            width: "100px",
            height: "100px",
            marginRight: "100px",
          }}
        />
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            height: "45px",
            backgroundColor: "rgb(17, 105, 191)",
            width: "100%",
            mt: "7px",
            alignItems: "center",
            justifyContent: "space-between",
            px: "100px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 6,
              flexWrap: "wrap",
              overflowX: "auto",
            }}
          >
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Home
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              About us
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Contents
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Programs
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Reports
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              News and Events
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Downloads
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Curriculum
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Gallery
            </Box>
            <Box
              component="a"
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  color: "#F58D4C",
                },
              }}
            >
              Contact us
            </Box>
          </Box>

          <Box
            component="a"
            href="#"
            sx={{
              color: "white",
              textDecoration: "none",
              "&:hover": {
                color: "#F58D4C",
              },
              marginLeft: "auto",
              pl: 2,
            }}
          >
            Login
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
