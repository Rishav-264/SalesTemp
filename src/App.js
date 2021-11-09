import './App.css'
import Admin from './components/AdminWrapper/Admin'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" exact element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
