import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // True if screen is small
  const [drawerOpen, setDrawerOpen] = useState(false); // Controls mobile drawer visibility

  return (
    <>
      {/* ---------- Top Header Section with Logos and Campus Info ---------- */}
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          p: 1,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {/* Left Logo */}
        <Box
          component="img"
          src="TU.jpg"
          alt="Tribhuvan University Logo"
          sx={{
            width: { xs: 130, md: 130 },
            height: { xs: 130, md: 130 },
            mb: { xs: 1, md: 0 },
            ml: { xs: 0, md: "100px" },
          }}
        />

        {/* Center Text */}
        <Box
          sx={{
            color: "#024282",
            textAlign: "center",
            flex: 1,
          }}
        >
          <Typography variant="body2">
            त्रिभुवन विश्वविद्यालयबाट सम्बन्धन प्राप्त
          </Typography>
          <Typography variant="body2">
            Affiliated to Tribhuwan University
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            नेपालगञ्ज बहुमुखी क्याम्पस
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            NEPALGUNJ MULTIPLE CAMPUS
          </Typography>
          <Typography variant="body2">नेपालगञ्ज, बाँके</Typography>
          <Typography variant="body2">Nepalgunj, Banke</Typography>
        </Box>

        {/* Right Flag */}
        <Box
          component="img"
          src="https://media.tenor.com/MCKjaHTU0kwAAAAj/nepal.gif"
          alt="Nepal Flag"
          sx={{
            display: { xs: "none", md: "block" },
            width: 130,
            height: 130,
            marginRight: "100px",
          }}
        />
      </Grid>

      {/* ---------- Navigation Bar Section ---------- */}
<Box sx={{ 
  width: '100%', 
  backgroundColor: "rgb(17, 105, 191)", 
  overflow: 'hidden',
  height: "45px"
}}>
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    px: { xs: 2, md: 10, lg: "150px" },
    maxWidth: '100%',
    margin: '0 auto',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': { display: 'none' }
  }}>
   
    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Home</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>About us</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Contents</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Programs</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Reports</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>News and Events</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Downloads</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Curriculum</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Gallery</Box>

    <Box component="a" href="#" sx={{
      color: "white",
      textDecoration: "none",
      whiteSpace: "nowrap",
      fontSize: "1.05rem",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      flexShrink: 0,
      mr: 6,
      "&:hover": { color: "#F58D4C" },
    }}>Contact us</Box>

    
  </Box>
</Box>
    </>
  );
};

export default Navbar;
