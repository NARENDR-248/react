import React from 'react'
import { Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './style.css'
const Home = () => {
  const PaperStyle = { padding: 20, height: "100%", width: 300, margin: "20px auto" }
  return (
    <Grid>
      <Paper elevation={10} className='container'>
        <Grid style={{ marginTop: 420 }}>
          <h2>welcome to popX</h2>
          <p>lorem is the popx create your accountlorem is the popx create your account  </p>
          <p></p>
          <Link to={"/login"}><Button variant="contained" style={{ marginBottom: 20 }} fullWidth >login</Button> <br /></Link>
          <Link to={"/Sinup"}><Button variant="contained" style={{ backgroundColor: "#4169E1" }} fullWidth>allready Registered?Login</Button> <br /></Link>
        </Grid>

      </Paper>
    </Grid>

  )
}

export default Home
