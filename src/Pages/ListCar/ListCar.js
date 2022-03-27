import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Mobil } from '../../Assets/Components/Mobil/Mobil'
import Car from '../../Assets/img/breadcrumbCar.png'
import plus from '../../Assets/img/fi_plus.png'
import './ListCar.css'

export const ListCar = () => {
  return (
    <div id='list_mobil'>
      <img src={Car}></img>
      <Row>
        <Col><h3 id='judul'>List Car</h3> </Col>
        <Col><Button  id='plus'><a href='http://localhost:3000/AddNewCar'><img src={plus}></img>Add New Car</a></Button></Col>
      </Row>
      <div id='tombol'>
      <Button variant="outline-primary">All</Button>
      <Button variant="outline-primary">Small</Button>
      <Button variant="outline-primary">Medium</Button>
      <Button variant="outline-primary">Large</Button>
      </div>
      <div className='mobil'><Mobil/><Mobil/><Mobil/></div>
    </div>
  )
}
