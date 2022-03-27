import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import car from '../../img/mobil.png'
import vector from '../../img/Vector.png'
import jam from '../../img/fi_clock.png'
import trash from '../../img/fi_trash-2.png'
import edit from '../../img/fi_edit.png'
import '../Mobil/Mobil.css'

export const Mobil = () => {
  return (
    <div>
      <Row  className="g-4">
      {Array.from({ length: 3 }).map((_, idx) => (
       <Col>
          <Card style={{ width: '20rem' }}>
          <Card.Body>
          <img src={car} alt ='gambar mobil' id='car'></img>
              Nama/Tipe Mobil<br></br>
              <b>Rp.430.000/hari</b>
              <Card.Text>
              
              <img src={vector} alt ='gambar mobil'></img>&nbsp;&nbsp;Start rent - Finish rent <br></br>
              <img src={jam} alt ='gambar mobil'></img>&nbsp;Updated at 4 Apr 2022, 09.00
  
              </Card.Text>
              <div className='tombol'>
              <Button variant="outline-danger"><img src={trash} alt ='tempat sampah'></img><b>Delete</b></Button>
              <Button variant="success"><img src={edit} alt ='tempat sampah'></img>Edit</Button>
              </div>
          </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
