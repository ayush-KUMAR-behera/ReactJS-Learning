import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Product from './Pages/Product'
import Navbar from './components/Navbar'
import PageNotFound from './Pages/PageNotFound'
import Footer from './components/Footer'
import Mens from './Pages/Mens'
import About from './Pages/About'
import Dashboard from './Pages/Dashboard'
import ContatctDetails from './Pages/ContatctDetails'
import SwipeBtn from './components/SwipeBtn'
const App = () => {
  return (
    <div>
      <Navbar/>
      <SwipeBtn/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/about'>
          <Route index element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Route>
        
        <Route path='/contact'>
        <Route index element={<Contact/>}/>
        <Route path='/contact/:id' element={<ContatctDetails/>}/>
        </Route>
       
  <Route path='/product/' element={<Product />}>
          <Route path='men' element={<Mens />} /> {/* Note: no leading slash for nested paths */}
        </Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
