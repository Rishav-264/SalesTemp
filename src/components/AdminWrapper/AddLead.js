import * as React from 'react'
import { useEffect } from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import CircularProgress from '@mui/material/CircularProgress'
const axios = require('axios')

const container = {
  width: '90%',
  'margin-top': '3rem',
}

export default function AddLead() {
  const [company, setCompany] = React.useState('')
  const [first, setFirst] = React.useState('')
  const [middle, setMiddle] = React.useState('')
  const [last, setLast] = React.useState('')
  const [designation, setDesignation] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [number, setNumber] = React.useState('')
  const [linkedIn, setLinkedIn] = React.useState('')
  const [companies, setCompanies] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)

  useEffect(() => {
    setLoading(true)
    console.log('here')
    axios
      .get(' https://cogenthub-api.herokuapp.com/sales/getCompany')
      .then(function (response) {
        console.log(response.data.company)
        setCompanies(response.data.company)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const handleCompany = (event) => {
    setCompany(event.target.value)
  }

  const handleFirst = (event) => {
    setFirst(event.target.value)
  }

  const handleMiddle = (event) => {
    setMiddle(event.target.value)
  }

  const handleLast = (event) => {
    setLast(event.target.value)
  }

  const handleDesignation = (event) => {
    setDesignation(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleLinkedin = (event) => {
    setLinkedIn(event.target.value)
  }

  const handleSubmit = (event) => {
    axios
      .post(' https://cogenthub-api.herokuapp.com/sales/addLead', {
        company: company,
        first: first,
        middle: middle,
        last: last,
        designation: designation,
        email: email,
        phoneNumber: number,
        linkedin: linkedIn,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error.response)
      })
  }

  return (
    <div style={container}>
      <Typography variant="h6" gutterBottom>
        Add Lead
      </Typography>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel id="demo-simple-select-label">Company</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={company}
                label="Company"
                onChange={handleCompany}
              >
                {companies.map((company) => {
                  return (
                    <MenuItem value={company.name}>{company.name}</MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleFirst}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="middleName"
              name="middleName"
              label="Middle name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={handleMiddle}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              onChange={handleLast}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Designation"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              onChange={handleDesignation}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              label="Email"
              fullWidth
              variant="standard"
              onChange={handleEmail}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Phone Number"
              fullWidth
              autoComplete="shipping postal-code"
              variant="standard"
              onChange={handleNumber}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="LinkedIn"
              fullWidth
              autoComplete="shipping country"
              variant="standard"
              onChange={handleLinkedin}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  )
}
