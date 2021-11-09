import { useState } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
const axios = require('axios')

const container = {
  width: '90%',
  'margin-top': '3rem',
}

export default function AddCompany() {
  const [name, setName] = useState('')
  const [website, setWebsite] = useState('')
  const [location, setLocation] = useState('')
  const [linkedin, setLinkedIn] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }
  const handleWebsite = (event) => {
    setWebsite(event.target.value)
  }
  const handleLocation = (event) => {
    setLocation(event.target.value)
  }
  const handleLinkedIn = (event) => {
    setLinkedIn(event.target.value)
  }

  const handleSubmit = () => {
    axios
      .post(' https://cogenthub-api.herokuapp.com/sales/addCompany', {
        name: name,
        website: website,
        location: location,
        linkedin: linkedin,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div style={container}>
      <Typography variant="h6" gutterBottom>
        Add Company
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="firstName"
            onChange={handleName}
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Website"
            onChange={handleWebsite}
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="middleName"
            name="middleName"
            label="Location"
            onChange={handleLocation}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="city"
            name="city"
            label="LinkedIn"
            onChange={handleLinkedIn}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
