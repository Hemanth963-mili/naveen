import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Home from './Home';
import MasterAccount from './MasterAccount';
import Broker from './Broker';
import Orders from './Orders';
import Others from './Others';


function NavBar() {
  return (

    <Router>
    <div>
       

    <Nav defaultActiveKey="/Home" as="ul" className="container  justify-content-end "   >

      <Nav.Item as="li" >
        <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link as={Link} to={"/MasterAccount"}>Master Account</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link as={Link} to={"/Broker"}>Broker</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link as={Link} to={"/Orders"}>Orders</Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link as={Link} to={"/Others"}>Others</Nav.Link>
      </Nav.Item>

    </Nav>
    </div>

    <div>
    

     <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/MasterAccount" element={<MasterAccount />} />
        <Route path="/Broker" element={<Broker />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Others" element={<Others />} />
      </Routes>
    </div>
    </Router>
  )
}

export default NavBar