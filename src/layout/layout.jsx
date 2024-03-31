import React, {  } from 'react'
import Navbar from '../pages/navbar'
import Footer from '../pages/footer'

export default function Layout({children}) {
  return (
    <div>
        <Navbar> </Navbar>
            <div className='ramesh'>{children}</div>
        <Footer/>
    </div>
  )
}
