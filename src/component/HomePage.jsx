import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import './accets/homepages.css'; // Ensure this path is correct
import EducationGif from '../component/img/Education.gif';

const HomePage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Vertical on mobile, horizontal on larger screens
                minHeight: { xs: 'auto', md: '530px' }, // Auto height for small screens, fixed for larger
            }}
        >
            {/* Left Text Section */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 3,
                }}
            >
                <Stack spacing={2}>
                    <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}
                        className="text"
                    >
                        Join Us for a Special Event
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' } }}
                        className="para"
                    >
                        Welcome to Seed Learn, a dedicated initiative focused on providing quality education to underprivileged students.
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{ fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' } }}
                        className="com"
                    >
                        
                    </Typography>
                </Stack>
            </Box>

            {/* Right GIF Section */}
            <Box
                sx={{
                    flex: 1,
                    backgroundImage: `url(${EducationGif})`,
                    backgroundSize: 'contain', // Maintain aspect ratio within the container
                    backgroundPosition: 'center', // Center the image
                    backgroundRepeat: 'no-repeat', // Prevents tiling of the GIF
                    minHeight: { xs: '300px', sm: '400px', md: '100%' }, // Ensure min height on small screens
                    width: '100%', // Full width for the container
                    mt: { xs: 2, md: 0 }, // Top margin for mobile view
                }}
            />
        </Box>
    );
}

export default HomePage;