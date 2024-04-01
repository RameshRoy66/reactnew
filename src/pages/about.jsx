import React from 'react'
// import Navbar from './navbar'
import Layout from '../layout/layout';
import comments from '../components/dummydata2'

export default function About() {
  
  return (
    <Layout>
      <div className="container">
      <div className='row'>  
    {comments.map((comments) => {
      return(
        <div className='col-sm-3' >
          <div className="card">
            <div className="card-header">{comments.id}</div>
            <div className="card-body">{comments.body}</div>
            <div className="card-footer">{comments.user.username}</div>
            <a href="https://www.google.com/" target='_blank' rel="noreferrer">ramesh</a>
            {/* <a href="../pages/contact">about</a> */}
          </div>
        </div>
      )
    }
    )}


    </div>
      </div>
    </Layout>
    
  )
}
