import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import Layout from './../components/Layout/Layout'
import MailIcon from '@mui/icons-material/Mail';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my:5, ml: 5,
         "& h4":{ fontWeight:"bold", mb: 2, }}}>
        <Typography sx={{fontSize:"25px", fontWeight:"bold", mb:3}}>Contact My Restaurant</Typography>
        <p> Grief is like the ocean; it comes in waves ebbing and flowing. Sometimes the water is calm, and sometimes it is overwhelming. All we can do is learn to swim
Those we love and lose are always connected  by heartstrings into infinity
Unable are the  loved to die, for love is immortality.
Thank you so much to everyone for being here today to celebrate the life and honor the memory of my mother.
To explain just how much my mother means to me is an impossible task, but I want to make sure that I pay tribute to my mother at her funeral.</p>
      </Box>
      <Box sx={{ m:3, width:"600px", ml: 5, "@media{max-width:300px}":{width:"300px"} }}>
        <TableContainer component={Paper}>
          <Table aria-aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',  }} align="center"
                >Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{color: 'red', pt:1}} />+2348139928888 (toll free)
                </TableCell>
                
              </TableRow>
              <TableRow>
              <TableCell>
                  <MailIcon sx={{color: 'skyblue', pt:1}} />help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <CallIcon sx={{color: 'green', pt:1}} />+2348139928888
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact 