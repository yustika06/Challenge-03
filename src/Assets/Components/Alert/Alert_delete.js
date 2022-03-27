import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import caralert from '../../img/img-BeepBeep.png'
import './Alert_delete.css'

export const Alert_delete = () => {
  return (
    <div>

    <Row  className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
       <Col>
          <Card style={{ width: '25rem' }}>
          <Card.Body>
          <img src={caralert}></img>
              <h5>Menghapus Data Mobil</h5>
              Setelah dihapus, data mobil tidak dapat <br></br> dikembalikan. Yakin ingin menghapus?
              <div className='tombol'>
              <Button variant="primary">Ya</Button>
              <Button variant="outline-primary">Tidak</Button>
              </div>
          </Card.Body>
          </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
