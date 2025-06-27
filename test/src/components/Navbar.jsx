import React, { useState, useEffect } from "react";
import {
  Box, Typography, IconButton, Collapse, List, ListItem, ListItemText,
  useMediaQuery, useTheme
} from "@mui/material";
import { Menu, Close, ExpandMore, ExpandLess } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);

  useEffect(() => {
    if (!isMobile) setMobileOpen(false);
  }, [isMobile]);

  const navItems = [
    { name: "Home" },
    { 
      name: "About us",
      key: "about",
      subItems: ["Introduction", "Our Team", "FAQ"]
    },
    { 
      name: "Contents", 
      key: "contents",
      subItems: ["Notices", "Publication", "Thesis"]
    },
    { name: "Programs" },
    { name: "Reports" },
    { name: "News and Events" },
    { name: "Downloads" },
    { name: "Curriculum" },
    { name: "Gallery" },
    { name: "Contact us" },
    { name: "Login", alignRight: true, icon: <PersonIcon fontSize="small" /> }
  ];

  const toggleMenu = (menuKey) => {
    setExpandedMenu(prev => prev === menuKey ? null : menuKey);
  };

  const fontStyle = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  };

  const renderNavItem = (item) => (
    <Box
      key={item.name}
      sx={{ 
        position: 'relative',
        mr: 4,
        ml: 0
      }}
    >
      {item.subItems ? (
        <>
          <Box
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleMenu(item.key);
            }}
            sx={{
              color: "white",
              textDecoration: "none",
              whiteSpace: "nowrap",
              fontSize: "0.95rem",
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              "&:hover": { color: "#F58D4C" },
              ...fontStyle
            }}
          >
            {item.name}
            {expandedMenu === item.key ? <ExpandLess /> : <ExpandMore />}
          </Box>

          {expandedMenu === item.key && (
            <Box sx={{
              position: 'absolute',
              top: '100%',
              right: -5,
              backgroundColor: 'rgb(17, 105, 191)',
              boxShadow: '0px 4px 5px rgba(0,0,0,0.2)',
              zIndex: 1,
              minWidth: '100px',
              ...fontStyle
            }}>
              {item.subItems.map((subItem) => (
                <Box
                  key={subItem}
                  component="a"
                  href="#"
                  sx={{
                    display: 'block',
                    px: 2,
                    py: 1,
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: "0.9rem",
                    "&:hover": { 
                      color: "#F58D4C",
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    },
                    ...fontStyle
                  }}
                >
                  {subItem}
                </Box>
              ))}
            </Box>
          )}
        </>
      ) : (
        <Box
          component="a"
          href="#"
          sx={{
            color: "white",
            textDecoration: "none",
            whiteSpace: "nowrap",
            fontSize: "0.95rem",
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            "&:hover": { color: "#F58D4C" },
            ...fontStyle
          }}
        >
          {item.icon && item.icon}
          {item.name}
        </Box>
      )}
    </Box>
  );

  return (
    <>
      {/* Header Section */}
      <Box sx={{ 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
        p: 1,
        textAlign: { xs: "center", md: "left" }
      }}>
        <Box
          component="img"
          src="TU.jpg"
          alt="Logo"
          sx={{ width: 130, height: 130, mb: { xs: 1, md: 0 }, ml: { xs: 0, md: "100px" } }}
        />
        
        <Box sx={{ color: "#024282", textAlign: "center", flex: 1, ...fontStyle }}>
          <Typography variant="body2" sx={fontStyle}>
            त्रिभुवन विश्वविद्यालयबाट सम्बन्धन प्राप्त
          </Typography>
          <Typography variant="body2" sx={fontStyle}>
            Affiliated to Tribhuwan University
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={fontStyle}>
            नेपालगञ्ज बहुमुखी क्याम्पस
          </Typography>
          <Typography variant="h6" fontWeight="bold" sx={fontStyle}>
            NEPALGUNJ MULTIPLE CAMPUS
          </Typography>
          <Typography variant="body2" sx={fontStyle}>
            नेपालगञ्ज, बाँके
          </Typography>
          <Typography variant="body2" sx={fontStyle}>
            Nepalgunj, Banke
          </Typography>
        </Box>

        <Box
          component="img"
          src="https://media.tenor.com/MCKjaHTU0kwAAAAj/nepal.gif"
          alt="Flag"
          sx={{ display: { xs: "none", md: "block" }, width: 130, height: 130, mr: "100px" }}
        />
      </Box>

      {/* Navigation Bar */}
      <Box sx={{ 
        width: '100%', 
        backgroundColor: "rgb(17, 105, 191)", 
        height: "42px",
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            onClick={() => setMobileOpen(!mobileOpen)}
            sx={{ ml: 1, color: 'white' }}
          >
            {mobileOpen ? <Close /> : <Menu />}
          </IconButton>
        )}

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
            px: { md: 10, lg: "150px" },
            width: '100%',
            ...fontStyle
          }}>
            {/* Left-aligned items */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.filter(item => !item.alignRight).map(renderNavItem)}
            </Box>
            
            {/* Right-aligned items with extra spacing */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {navItems.filter(item => item.alignRight).map(item => (
                <Box key={item.name} sx={{ ml: 8 }}>
                  {renderNavItem(item)}
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <Collapse in={mobileOpen} sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            zIndex: 1,
            backgroundColor: 'rgb(17, 105, 191)',
            boxShadow: '0px 4px 5px rgba(0,0,0,0.2)'
          }}>
            <List sx={{ py: 0, ...fontStyle }}>
              {navItems.map((item) => (
                <React.Fragment key={item.name}>
                  <ListItem 
                    button 
                    component={item.subItems ? 'div' : 'a'}
                    href={item.subItems ? undefined : '#'}
                    onClick={() => {
                      if (!item.subItems) setMobileOpen(false);
                      if (item.subItems) toggleMenu(item.key);
                    }}
                    sx={{
                      color: 'white',
                      "&:hover": { color: "#F58D4C" },
                      ...fontStyle
                    }}
                  >
                    {item.icon && (
                      <Box sx={{ display: 'flex', mr: 1 }}>
                        {item.icon}
                      </Box>
                    )}
                    <ListItemText 
                      primary={item.name} 
                      primaryTypographyProps={{...fontStyle, fontSize: "0.95rem"}} 
                    />
                    {item.subItems && (
                      expandedMenu === item.key ? <ExpandLess /> : <ExpandMore />
                    )}
                  </ListItem>
                  
                  {item.subItems && (
                    <Collapse in={expandedMenu === item.key}>
                      <List sx={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        {item.subItems.map((subItem) => (
                          <ListItem
                            key={subItem}
                            button
                            component="a"
                            href="#"
                            onClick={() => setMobileOpen(false)}
                            sx={{ pl: 4, color: 'white', ...fontStyle }}
                          >
                            <ListItemText 
                              primary={subItem} 
                              primaryTypographyProps={{...fontStyle, fontSize: "0.9rem"}} 
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  )}
                </React.Fragment>
              ))}
            </List>
          </Collapse>
        )}
      </Box>
    </>
  );
};

export default Navbar;