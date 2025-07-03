import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoPersonCircle } from "react-icons/io5";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaBullhorn } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const Homepage = () => {
  return (
    // Main container for the entire page layout
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensures page takes at least full viewport height
      }}
    >
      {/* Navigation bar at the top */}
      <Navbar />

      {/* Highlights banner section */}
      <Box>
        <Grid
          container
          sx={{
            border: 1,
            borderColor: "rgb(243, 103, 16)", // Orange border
            width: "100%",
            height: 27, // Fixed height for the banner
          }}
        >
          {/* Highlights label with icon */}
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(243, 103, 16)", // Orange background
              width: 90, // Fixed width for the label
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "13px",
                display: "flex",
                alignItems: "center",
                gap: "2px", // Space between text and icon
              }}
            >
              Highlights
              <FaBullhorn /> {/* Bullhorn icon */}
            </Typography>
          </Grid>
          <Grid container
          sx={{
            borderColor: "white", 
            width: "100%",
             }}>
              <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
          </Grid>
        </Grid>
      </Box>

      {/* Main content area */}
      <Box sx={{ flex: 1, p: 3 }}> {/* flex: 1 makes this area grow to fill space */}
        <Grid container spacing={3} justifyContent="center">
          {/* ================= LEFT COLUMN ================= */}
          <Grid item xs={12} md={2.5}>
            <Box
              sx={{
                backgroundColor: "white",
                border: 1,
                borderColor: "rgb(17, 105, 191)", // Blue border
                borderRadius: 2,
                height: "104%", // Slightly taller than other columns
              }}
            >
              {/* Column header */}
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgb(17, 105, 191)", // Blue background
                  height: 40,
                  borderTopLeftRadius: 4,
                  borderTopRightRadius: 4,
                }}
              >
                <Typography variant="subtitle2" sx={{ color: "white" }}>
                  Application under Implementation
                </Typography>
              </Grid>

              {/* First application button */}
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgb(243, 103, 16)", // Orange background
                  height: 50,
                  m: 2, // Margin
                  pl: 2, // Left padding
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  HEMIS
                </Typography>
              </Grid>

              {/* Second application button */}
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "rgb(243, 103, 16)", // Orange background
                  height: 50,
                  m: 2, // Margin
                  pl: 2, // Left padding
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  TU Exam Notice and Result
                </Typography>
              </Grid>
            </Box>
          </Grid>

          {/* ================= MIDDLE COLUMN ================= */}
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                border: 1,
                borderColor: "rgb(17, 105, 191)", // Blue border
                p: 2, // Padding
                mx: -1, // Negative margin to adjust grid spacing
                height: "95%", // Slightly shorter than left column
              }}
            >
              {/* Image placeholder (commented out) */}
              {/* <Box
                component="img"
                src="groupistockphoto.jpg"
                alt="groupistockphoto"
                sx={{
                  width: 300,
                  height: 300,
                  objectFit: "cover",
                }}
              /> */}
            </Box>
          </Grid>

          {/* ================= RIGHT COLUMN ================= */}
          <Grid item xs={12} md={2.5}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgb(17, 105, 191)", // Blue background
                p: 1, // Padding
                borderRadius: 2,
                height: "100%",
                color: "white", // White text for all children
              }}
            >
              {/* Chairman section */}
              <IoPersonCircle
                style={{
                  fontSize: "100px",
                  color: "inherit", // Inherits white color
                  marginBottom: "3px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  textAlign: "center",
                  marginBottom: "3px",
                }}
              >
                Chairman
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "10px",
                  color: "inherit", // Inherits white color
                  "&:hover": {
                    borderColor: "black",
                  },
                }}
              >
                View message
              </Button>

              {/* Campus Chief section */}
              <IoPersonCircle
                style={{
                  fontSize: "100px",
                  color: "inherit", // Inherits white color
                  marginBottom: "3px",
                }}
              />
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: 500,
                  lineHeight: 1,
                  textAlign: "center",
                  marginBottom: "3px",
                }}
              >
                Campus Chief
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  fontSize: "10px",
                  color: "inherit", // Inherits white color
                  marginBottom: "10px",
                  "&:hover": {
                    borderColor: "black",
                  },
                }}
              >
                View message
              </Button>

              {/* Our Team button */}
              <Button
                variant="plain"
                sx={{
                  fontSize: "12px",
                  color: "inherit", // Inherits white color
                  "&:hover": {
                    backgroundColor: "#0d47a1", // Darker blue on hover
                  },
                }}
              >
                Our Team <IoIosArrowRoundForward fontSize={15} />
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer at the bottom of the page */}
      <Footer />
    </Box>
  );
};

export default Homepage;