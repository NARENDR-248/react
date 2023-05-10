import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Grid, Paper } from '@mui/material';
import './index.css';

const Avathar = () => {
  const PaperStyle = { padding: 20, height: "100vh", width: 300, margin: "20px auto" };

  return (
    <Paper elevation={10} className='container'>
      <Grid className='avatar'>
        <div className='avtarHeader'>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <div className='avtarName'>
            <span>Marry Doe </span>
            <span>Marry@Gmail.Com</span>
          </div>
        </div>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
      </Grid>
    </Paper>

  )
}

export default Avathar
