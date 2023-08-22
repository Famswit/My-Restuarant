import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import Layout from './../components/Layout/Layout'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15, textAlign:"center", p: 2,
        "& h4":{
          fontWeight: "bold",
          my:2,
          fontSize: "2rem",
        },
        "& p": {
          textAlign: "justify",
        },
        "@media (max-width:600px)": {
          mt: 0,
          "& h4":{
            fontSize:"1.5rem",
          }
        }
      }}>
        <Typography variant='h4'>Welcome To My Restaurant</Typography>
        <p>Grief is like the ocean; it comes in waves ebbing and flowing. Sometimes the water is calm, and sometimes it is overwhelming. All we can do is learn to swim
Those we love and lose are always connected by heartstrings into infinity
Unable are the  loved to die, for love is immortality.
Thank you so much to everyone for being here today to celebrate the life and honor the memory of my mother.
To explain just how much my mother means to me is an impossible task, but I want to make sure that I pay tribute to my mother at her funeral.
</p>
<br />
<p>Grief is like the ocean; it comes in waves ebbing and flowing. Sometimes the water is calm, and sometimes it is overwhelming. All we can do is learn to swim
Those we love and lose are always connected by heartstrings into infinity
Unable are the  loved to die, for love is immortality.
Thank you so much to everyone for being here today to celebrate the life and honor the memory of my mother.
To explain just how much my mother means to me is an impossible task, but I want to make sure that I pay tribute to my mother at her funeral.
</p>
      </Box>
    </Layout>
  )
}

export default About