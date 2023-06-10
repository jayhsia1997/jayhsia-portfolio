import React from 'react';
import Navbar from "./Navbar";
import { Box } from "@mui/material";

const About = () => {
	return (
		<div>
			<Navbar />
			<Box component="main" sx={{ p: 3 }}>
				Abuot me
			</Box>
		</div>
	);
};

export default About;