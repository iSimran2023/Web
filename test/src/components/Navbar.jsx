import React, { useEffect, useState, useRef } from "react";
import { Box, Grid, Typography, MenuItem } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State for tracking which dropdown is open
  const [openDropdown, setOpenDropdown] = useState(null);

  // Refs for dropdown elements to handle click outside
  const aboutRef = useRef(null);
  const aboutBtnRef = useRef(null);
  const contentsRef = useRef(null);
  const contentsBtnRef = useRef(null);

  // Navigation links
  const navLinks = [
    { href: "/program", label: "Programs" },
    { href: "/report", label: "Reports" },
    { href: "/news", label: "News and Events" },
    { href: "/downloads", label: "Downloads" },
    { href: "/curriculum", label: "Curriculum" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  useEffect(() => {
    // Handle clicks outside dropdowns to close them
    const handleClickOutside = (event) => {
      if (
        (openDropdown === "about" &&
          aboutRef.current &&
          !aboutRef.current.contains(event.target) &&
          !aboutBtnRef.current.contains(event.target)) ||
        (openDropdown === "contents" &&
          contentsRef.current &&
          !contentsRef.current.contains(event.target) &&
          !contentsBtnRef.current.contains(event.target))
      ) {
        setOpenDropdown(null);
      }
    };

    // Handle window resize to reset menu states on desktop view
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setIsMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    // Add event listeners
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [openDropdown]);

  return (
    <Grid className="navbar">
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on desktop
          p: 1,
          textAlign: "center",
        }}
      >
        {/* Campus Logo */}
        <Box
          component="img"
          src="TU.jpg"
          alt="Logo"
          sx={{
            width: 130,
            height: 130,
            mb: { xs: 1, md: 0 }, // Margin bottom on mobile only
            ml: { xs: 0, md: "100px" }, // Left margin on desktop
          }}
        />

        {/* Campus Information */}
        <Box sx={{ color: "#024282", flex: 1 }}>
          <Typography variant="body2">
            त्रिभुवन विश्वविद्यालयबाट सम्बन्धन प्राप्त
          </Typography>
          <Typography variant="body2">
            Affiliated to Tribhuwan University
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            नेपालगञ्ज बहुमुखी क्याम्पस
          </Typography>
          <Typography variant="h6" fontWeight="bold">
            NEPALGUNJ MULTIPLE CAMPUS
          </Typography>
          <Typography variant="body2">नेपालगञ्ज, बाँके</Typography>
          <Typography variant="body2">Nepalgunj, Banke</Typography>
        </Box>

        {/* National Flag (hidden on mobile) */}
        <Box
          component="img"
          src="https://media.tenor.com/MCKjaHTU0kwAAAAj/nepal.gif"
          alt="Flag"
          sx={{
            display: { xs: "none", md: "block" }, // Hidden on mobile
            width: 130,
            height: 130,
            mr: "100px", // Right margin on desktop
          }}
        />
      </Box>

      {/* Navigation Bar */}
      <Grid
        container
        sx={{
          backgroundColor: "rgb(17, 105, 191)",
          minHeight: "42px",
          position: "relative",
        }}
      >
        {/* Mobile Menu Button (Hamburger/Close) */}
        <Grid sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            sx={{ ml: 2, color: "white" }}
          >
            {isMenuOpen ? (
              <IoMdClose size={24} />
            ) : (
              <GiHamburgerMenu size={24} />
            )}
          </IconButton>
        </Grid>

        {/* Navigation Links */}
        <Box
          display={isMenuOpen ? "flex" : { xs: "none", md: "flex" }}
          flexDirection={{ xs: "column", md: "row" }}
          sx={{
            justifyContent: { md: "center" },
            position: { xs: "absolute", md: "static" },
            top: { xs: "42px" }, // Position below navbar on mobile
            left: 0,
            width: "100%",
            backgroundColor: { xs: "rgb(17, 105, 191)", md: "transparent" },
            px: { xs: 2, md: 5 }, // Horizontal padding
            py: { xs: 2, md: 0 }, // Vertical padding
            gap: { xs: 2, md: 4 }, // Gap between items
            zIndex: 1100,
            flexWrap: { xs: "nowrap", md: "nowrap" },
            alignItems: { md: "center" },
            whiteSpace: "nowrap", // Prevent text wrapping
          }}
        >
          {/* Home Link */}
          <Box
            sx={{
              color: "white",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              "&:hover": { color: "rgb(243, 103, 16)" }, // Orange on hover
              ml: { md: "100px" }, // Left margin on desktop
            }}
          >
            Home
          </Box>

          {/* About Us Dropdown */}
          <Box sx={{ position: "relative" }}>
            <Box
              onClick={() =>
                setOpenDropdown(openDropdown === "about" ? null : "about")
              }
              ref={aboutBtnRef}
              sx={{
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                "&:hover": { color: "rgb(243, 103, 16)" },
              }}
            >
              About us <RiArrowDropDownLine />
            </Box>
            {openDropdown === "about" && (
              <Box
                ref={aboutRef}
                sx={{
                  position: { xs: "static", md: "absolute" },
                  top: { md: "150%" }, // Position below button on desktop
                  backgroundColor: "rgb(17, 105, 191)",
                  width: { xs: "100%", md: "120px" },
                  ml: { md: -2 },
                  zIndex: 1200,
                }}
              >
                {["Introduction", "Our Team", "FAQ"].map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      color: "white",
                      "&:hover": { backgroundColor: "#0d47a1" }, // Darker blue on hover
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          {/* Contents Dropdown */}
          <Box sx={{ position: "relative" }}>
            <Box
              onClick={() =>
                setOpenDropdown(openDropdown === "contents" ? null : "contents")
              }
              ref={contentsBtnRef}
              sx={{
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                "&:hover": { color: "rgb(243, 103, 16)" },
              }}
            >
              Contents <RiArrowDropDownLine />
            </Box>
            {openDropdown === "contents" && (
              <Box
                ref={contentsRef}
                sx={{
                  position: { xs: "static", md: "absolute" },
                  top: { md: "150%" },
                  backgroundColor: "rgb(17, 105, 191)",
                  width: { xs: "100%", md: "120px" },
                  ml: { md: -2 },
                  zIndex: 1200,
                }}
              >
                {["Notices", "Publication", "Thesis"].map((item) => (
                  <MenuItem
                    key={item}
                    sx={{
                      color: "white",
                      "&:hover": { backgroundColor: "#0d47a1" },
                    }}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Box>
            )}
          </Box>

          {/* Regular Navigation Links */}
          {[
            "Programs",
            "Reports",
            "News and Events",
            "Downloads",
            "Curriculum",
            "Gallery",
            "Contact us",
          ].map((label) => (
            <Box
              key={label}
              sx={{
                color: "white",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                "&:hover": { color: "rgb(243, 103, 16)" },
              }}
            >
              {label}
            </Box>
          ))}

          {/* Login Button */}
          <Box
            sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              cursor: "pointer",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              ml: { md: "auto" }, // Push to right on desktop
              mr: { md: "100px" }, // Right margin on desktop
              "&:hover": { color: "rgb(243, 103, 16)" },
            }}
          >
            <IoPerson fontSize="small" />
            <Link
              to="/login"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Login
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Navbar;
