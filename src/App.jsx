import { Routes, Route } from 'react-router-dom'
import './App.css'
import FloatingMenu from './components/FloatingMenu'
import MyAlbum from './views/MyAlbum'
import GetSheets from './views/GetSheets'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MyAlbum />} />
        <Route path="/get-sheets" element={<GetSheets />} />
      </Routes>
      <FloatingMenu />
    </>
  )
}

export default App
