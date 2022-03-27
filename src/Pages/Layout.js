import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { BrowserRouter} from 'react-router-dom'
import { NavbarDefault } from '../Assets/Components/NavbarSamping/NavbarDefault'
import { NavbarSearch } from '../Assets/Components/NavbarSearch/NavbarSearch'
import { Routers } from '../Routes/Routers'

export const Layout = () => {
  return (
    <div bgcolor='#F4F5F7'>
      <Row>
        <Col sm={1}><NavbarDefault/></Col>
        <Col sm={10}><NavbarSearch/>
        <Row> 
        <BrowserRouter>
          <Routers/>
        </BrowserRouter> 
        </Row></Col>
      </Row>
        
    </div>
  )
}
