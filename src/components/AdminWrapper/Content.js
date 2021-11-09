import AddLead from './AddLead'
import AddCompany from './AddCompany'
import LeadsTable from './LeadsTable'

const Content = ({ content }) => {
  return (
    <>
      {content === '1' && <AddLead />}
      {content === '2' && <AddCompany />}
      {content === '3' && <LeadsTable />}
    </>
  )
}

export default Content
