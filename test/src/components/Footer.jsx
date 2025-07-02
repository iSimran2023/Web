import React from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgb(17, 105, 191)",
          color: "white",
          px: 4,
          py: 3,
        }}
      >
        <Grid container spacing={10}>
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontSize: "24px" }}>
              Information Officer
            </Typography>
            <Box
              component="img"
              src="istockphoto.jpg"
              alt="istockphoto"
              sx={{
                width: 120,
                height: 120,
                mb: 1,
              }}
            />
            <Typography>Test Bahadur</Typography>
            <Typography sx={{ fontSize: "14px" }}>
              <MdOutlineMarkEmailRead
                style={{ marginRight: 3, fontSize: "14px" }}
              />
              testbahadur@info.com
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              <FaPhoneAlt style={{ marginRight: 3, fontSize: "14px" }} />
              +977-9810101010
            </Typography>
          </Grid>

          <Grid item xs={12} md={2.8}>
            <Typography sx={{ fontSize: "24px", mb: 1 }}>Related Links</Typography>
            <Link
              href="https://tu.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: "14px",
                color: "inherit",
                textDecoration: "none",
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                "&:hover": { color: "rgb(55 65 81)" },
              }}
            >
              Tribhuvan University (TU)
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography sx={{ fontSize: "24px", mb: 1 }}>Contact Us</Typography>
            <Typography sx={{ fontSize: "14px", mb: 1 }}>
              <IoMail style={{ marginRight: 3, fontSize: "14px" }} />
              contact@campus.edu.np
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>
              <FaPhoneAlt style={{ marginRight: 3, fontSize: "14px" }} />
              081-884848
            </Typography>
          </Grid>

          <Grid item xs={12} md={3.2}>
            <Typography sx={{ fontSize: "24px" }}>Find Us</Typography>
            <iframe
              title="Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2671442225624!2d85.32175831438512!3d27.705235932963485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f8e0b13ff%3A0x189fb646d4276076!2sTribhuvan%20University!5e0!3m2!1sen!2snp!4v1632820242845!5m2!1sen!2snp"
              width="100%"
              height="80%"
              style={{ border: 0, borderRadius: 7 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(55 65 81)",
          color: "white",
          py: 2,
          p: 1,
        }}
      >
        <Grid>
          <Typography sx={{ fontSize: "14px", ml: 3.5 }}>
            Copyright &copy;2025, TEST MULTIPLE CAMPUS, ALL RIGHTS RESERVED.
          </Typography>
        </Grid>
        <Grid>
          <Typography sx={{ fontSize: "14px", mr: 3.5 }}>
            Developed & Managed By @{""}
            <Box
              component="span"
              sx={{ color: "rgb(243, 103, 16)" }}
            >
              Simran Pun
            </Box>
          </Typography>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
