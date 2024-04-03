import React, { useState } from 'react';
import '../admincss/admin.css';
import Navbar from '../components/navbar'; // Import the Navbar component
import Sidebar from '../components/sidebar'; // Import the Sidebar component
// import App from '../components/apexcharts';
import MyTable from '../components/tables';


export default function Adminhome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
      },
    ],
    []
  );

  const data = React.useMemo(
    () => [
      { id: 1, name: 'John', age: 30 },
      { id: 2, name: 'Jane', age: 25 },
      { id: 3, name: 'Doe', age: 40 },
    ],
    []
  );




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


          <div className="container">

          {/* <App/> */}
          {/* <App/> */}
          <div style={{ padding: '20px' }}>
      <h1>Employee Data</h1>
      <MyTable columns={columns} data={data} />
    </div>
          </div>


        </div>
    </div>
    </div>

  )
}



