import React from 'react'
// import Navbar from './navbar'
import Layout from '../layout/layout'

export default function About() {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>

);
  return (
    <Layout>
    <div >

  <li>{listItems}</li>
    

    </div>
    </Layout>
    
  )
}
