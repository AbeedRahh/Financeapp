import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Finance Manager
          </Typography>&nbsp;
        <Button variant='contained' color='error'>
        <Link to ={'/s'} style={{textDecoration: "none", color:"white"}} >Signup</Link> </Button>&nbsp;&nbsp;
        <Button variant='contained' color='error' >
        <Link to ={'/l'} style={{textDecoration: "none", color:"white"}}>Login</Link> </Button>
        
        </Toolbar>
      </AppBar>
    </Box> 
    </div>
  )
}

export default Navbar
