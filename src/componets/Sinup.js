
import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Sinup = () => {
  const PaperStyle = { padding: 20, height: "100%", width: 300, margin: "20px auto" }
  return (
    <Grid>
      <Paper elevation={10} className='container login-container'>
        <Grid >
          <h2>create your</h2>
          <h2>popX account </h2>

        </Grid>
        <TextField label='full name' placeholder='enter your full name' fullWidth style={{ marginBottom: 5, marginTop: 20 }} />
        <TextField label='email address' placeholder='enter your email address' style={{ marginBottom: 5, marginTop: 5 }} fullWidth required />
        <TextField label='phone number' placeholder='enter your phone number' style={{ marginBottom: 10, marginTop: 5 }} fullWidth required />
        <TextField label='password' placeholder='enter your phone password' style={{ marginBottom: 10, marginTop: 5 }} fullWidth required />
        <TextField label='company name' placeholder='enter your company name' style={{ marginBottom: 10, marginTop: 5 }} fullWidth required />

        <Link to={'/Avathar'}><Button variant='contained' style={{ marginTop: 70 }} fullWidth>create</Button></Link>

      </Paper>
    </Grid>

  )
}

export default Sinup
