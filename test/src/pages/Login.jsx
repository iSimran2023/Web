import React from 'react';
import { 
  Paper,
  Typography, 
  FormControl, 
  FormLabel, 
  Input, 
  Box,    
  Button  
} from "@mui/material";
import Navbar from '../components/Navbar';

const Login = () => {
  return (
    <>
      <Navbar />
      <Box 
        sx={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // This centers children horizontally
          justifyContent: 'center', // This centers children vertically
          p: 4
        }}
      >
        <Typography variant="h5" component="h1" sx={{ mb: 3 }}>
          Admin Login
        </Typography>
        
        <Paper 
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 400,
            p: 3,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
          variant="outlined"
        >
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              fullWidth
            />
          </FormControl>
          
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              fullWidth
            />
          </FormControl>
          
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Login;