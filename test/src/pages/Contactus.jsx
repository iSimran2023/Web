import React from "react";
import {
  Box,
  Button,
  FormLabel,
  Typography,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import Navbar from "../components/Navbar";

const Contactus = () => {
  return (
    <>
      <Navbar />

      <Grid container spacing={2} sx={{ p: "80px" }}>
        {/* Map + Floating Info Box */}
        <Grid item xs={12} md={8}>
          <Box sx={{ position: "relative", height: "500px" }}>
            {/* Google Map */}
            <iframe
              title="Campus Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2671442225624!2d85.32175831438512!3d27.705235932963485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190f8e0b13ff%3A0x189fb646d4276076!2sTribhuvan%20University!5e0!3m2!1sen!2snp!4v1632820242845!5m2!1sen!2snp"
              width="100%"
              height="105%"
              style={{ border: 0, borderRadius: 7 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Info Box */}
            <Paper
              elevation={4}
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                padding: 3,
                width: { xs: "90%", sm: 500 },
                backgroundColor: "white",
                zIndex: 2,
              }}
            >
              <Grid container spacing={2}>
                {/* Address */}
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    ADDRESS
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4B5563", flex: 1 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit reprehenderit! </Typography>
                  <Typography variant="body2" sx={{ color: "#4B5563", flex: 1 }}>Test, Nepal</Typography>
                </Grid>

                {/* Email + Phone */}
                <Grid item xs={12} sm={6}>
                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    EMAIL
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4B5563", flex: 1, mb: 1 }}>
                    testmultiplecampus@gmail.com
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    sx={{ fontWeight: "bold", color: "primary.main" }}
                  >
                    PHONE
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#4B5563", flex: 1 }}>081-884848</Typography>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>

        {/* Feedback Form */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              maxWidth: 400,
              pl: { md: 6, xs: 0 },
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography fontWeight="bold">Feedback</Typography>
            <Typography fontSize="14px" sx={{ color: "#4B5563", flex: 1 }}>
              We're always here to listen! Your feedback is valuable to us, and
              we welcome any suggestions or thoughts you have.
            </Typography>

            <FormLabel sx={{ fontSize: '14px' }}>Name</FormLabel>
            <TextField variant="outlined" />

            <FormLabel sx={{ fontSize: '14px' }}>Email</FormLabel>
            <TextField variant="outlined" />

            <FormLabel sx={{ fontSize: '14px' }}>Contact No</FormLabel>
            <TextField variant="outlined" />

            <FormLabel sx={{ fontSize: '14px' }}>Message</FormLabel>
            <TextField
              variant="outlined"
              multiline
              minRows={2}
              maxRows={4}
              fullWidth
            />

            <Button variant="contained" sx={{ width: "fit-content", mt: 1 }}>
              Send Feedback
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Contactus;
