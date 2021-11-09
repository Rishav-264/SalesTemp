import Sidebar from './Sidebar'
import Content from './Content'

import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Admin = () => {
  const [content, setContent] = useState('1')

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Sidebar setContent={setContent} />
          </Grid>
          <Grid item xs={9}>
            <Content content={content} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Admin
