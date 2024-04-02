import React, { useState } from 'react';
import '../admincss/admin.css';
import Navbar from '../components/navbar'; // Import the Navbar component
import Sidebar from '../components/sidebar'; // Import the Sidebar component
// import App from '../components/apexcharts';
// import MyDataTable from '../components/tables';


export default function Adminhome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
        <Navbar toggleSidebar={toggleSidebar} /> {/* Use the Navbar component here */}
        <div className="margintop ">
          <Sidebar isSidebarOpen={isSidebarOpen} /> {/* Use the Sidebar component here */}
          <div className={`main-content ${isSidebarOpen ? 'shifted' : ''}`}>

        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <i className="bi bi-car-front"></i>
                <h6>Car Details</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <i className="bi bi-box"></i>
                <h6>Deliveries</h6>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <i className="bi bi-cart"></i>
                <h6>Cart's</h6>
              </div>
            </div>
          </div>
        </div>


          </div>
          <div className="container">

          {/* <App/> */}
          {/* <MyDataTable/> */}
          </div>


        </div>
    </div>
  )
}



