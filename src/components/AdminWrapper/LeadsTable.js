import * as React from 'react'
import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
const axios = require('axios')

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
]

const container = {
  width: '90%',
  'margin-top': '3rem',
}

export default function LeadsTable() {
  const [leads, setLeads] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios
      .get(' https://cogenthub-api.herokuapp.com/sales/getLeads')
      .then(function (response) {
        console.log(response.data)
        setLeads(response.data.leads)
        setLoading(false)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])
  return (
    <TableContainer component={Paper} style={container}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.company}
              </TableCell>
              <TableCell align="right">
                {row.first} {row.last}
              </TableCell>
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
