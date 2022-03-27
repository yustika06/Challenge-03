import React from 'react'
import homeIMG from '../../img/Home.png'
import truckIMG from '../../img/Administrator.png'
import rectangleIMG from '../../img/Rectangle.png'
import '../NavbarSamping/NavbarDefault.css'
import {Container} from 'react-bootstrap'

export const NavbarDefault = () => {
  return (
    <Container>
        <div className='Navbar'>
          <div className='nav'>
            <img src={rectangleIMG} id ='logo' alt='logo-home'/>
            <ul>
              <li><a href="Dashboard"><img src={homeIMG} alt='logo-home'/><p>Dashboard</p></a></li>
              <li><a href="ListCar"><img src={truckIMG} alt='logo-truck'/><p>Cars</p></a></li>
            </ul> 
          </div>
        </div>
    </Container>

  )
}
