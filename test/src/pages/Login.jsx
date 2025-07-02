import React from "react";
import {
  Paper,
  Typography,
  FormLabel,
  Box,
  Button,
  TextField,
} from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // This centers children horizontally
          justifyContent: "center", // This centers children vertically
          p: 4,
        }}
      >
        <Typography variant="h5" component="h1" sx={{ mb: 3 }}>
          Admin Login
        </Typography>

        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: 400,
            p: 5,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            boxShadow: 1,
            borderRadius: 5
          }}
          variant="outlined"
        >
            
            <FormLabel>Email</FormLabel>
            <TextField
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
            />

            <FormLabel>Password</FormLabel>
            <TextField
              name="password"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              fullWidth
            />

          <Button type="submit" variant="contained" sx={{ mt: 2 }}>
            Login
          </Button>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default Login;
