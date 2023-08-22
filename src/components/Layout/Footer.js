import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div> 
    <Box
     sx={{textAlign: "center", bgcolor: 'black', color:'white', p: 2}}>
        <Box sx={{
            my:2, "& svg":{
                fontSize: "20px",
                cursor:"pointer",
                mr:2,
            },
            "& svg:hover": {
                color: 'goldenrod',
                transform: 'translateX(5px)',
                transition:'all 400ms'
            }
        }}>
             {/**icons */} 
             <InstagramIcon />
             <TwitterIcon />
             <GitHubIcon />
             <YouTubeIcon />

             
        </Box>
        <Typography variant='h6' sx={{"@media (max-width:600px)": {
            fontSize:".7rem",
        }}}>
            All Right Reserved &copy; famtech 
        </Typography>
    </Box>
    </div>
  )
}

export default Footer