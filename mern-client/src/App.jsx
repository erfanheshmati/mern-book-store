import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import BackToTop from './components/BackToTop'


function App() {

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Outlet />
        <BackToTop />
      </div>
      <MyFooter />
    </>
  )
}

export default App
