import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import './accets/homepages.css'; // Ensure this path is correct

const HomePage = () => {
    return (
        <Box sx={{ display: 'flex', height: '550px' }}>
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                    backgroundColor: '#f5f5f5',
                }}
            >
                <Stack spacing={2}>
                    <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }} className="text">
                        Join Us for a Special Event
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }} className="para">
                        Welcome to Seed Learn, a dedicated initiative focused on providing quality education to underprivileged students.
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }} className="com">
                        SeedLearn.com
                    </Typography>
                </Stack>
            </Box>
            <Box
                sx={{
                    flex: 1,
                    backgroundImage: 'url(/img/Education.gif)', // Ensure this path is correct
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                    mt: 1,
                }}
            />
        </Box>
    );
}

export default HomePage;
