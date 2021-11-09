import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'

const sidebar = {
  'min-height': '100vh',
}

const Sidebar = ({ setContent }) => {
  return (
    <>
      <ProSidebar>
        <Menu iconShape="square" style={sidebar}>
          <MenuItem>
            <a
              href="#addLead"
              id="1"
              onClick={(e) => {
                setContent(e.target.id)
              }}
            >
              Add Lead
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#addCompany"
              id="2"
              onClick={(e) => {
                setContent(e.target.id)
              }}
            >
              Add Company
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#Leads"
              id="3"
              onClick={(e) => {
                setContent(e.target.id)
              }}
            >
              Leads
            </a>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </>
  )
}

export default Sidebar
