import React from 'react'
import Layout from '../layout/layout'
import languages from '../components/dummydata'
import { Link } from 'react-router-dom'


export default function services() {
  return (
    <Layout>
    <div >
    <div  className='container'>
    <div className="row">

      {languages.map((language) => {
        return (
          <div className="col-sm-4 d-flex justify-content-center servicecards" key={language.id}>
        <div className="card">
        <div className="card-header">{language.id}.{language.title}</div>
        <div className="card-body">{language.description}</div>
        <div className="card-footer">
        <img src={language.thumbnail} width={100} alt="" />
        <img src={language.images} width={100} alt="" />  
        


        <Link to="/Services/Page1">
        <h5>{language.brand}</h5>
        </Link>


        </div>
        </div>
        </div>
        )

      })}

        </div>

    </div>    </div>
    </Layout>
  )
}
