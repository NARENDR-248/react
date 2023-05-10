import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const PaperStyle = { padding: 20, height: "70vh", width: 300, margin: "20px auto" }
  return (
    <Grid>
      <Paper elevation={10} className=' container login-container'>
        <Grid align='center'>
          <h2>login</h2>
        </Grid>
        <TextField label='email' placeholder='enter your email' fullWidth style={{ marginBottom: 20, marginTop: 20 }} />
        <TextField label='password' placeholder='enter your password' fullWidth required />
        <Link to={'/Avathar'}><Button variant="contained" style={{ marginTop: 20 }} color="success" fullWidth required>login</Button></Link>

      </Paper>
    </Grid>


  )
}

export default Login
