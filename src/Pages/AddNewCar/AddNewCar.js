import React from 'react'
import { Button,Col,Form, Row, Table } from 'react-bootstrap'
import { NavbarSearch } from '../../Assets/Components/NavbarSearch/NavbarSearch'
import add from '../../Assets/img/AddNewCar.png'
import './AddNewCar.css'

export const AddNewCar = () => {
  return (
    <div id='addtombol'>
    <NavbarSearch/>
      <img src={add}></img>
      <h3 id='judul'>Add New Car</h3> 
      <Table id='addtable'>
        <tbody>
              <tr>
                  <td>Nama</td>
                  <td><Form.Control type="email" placeholder="placeholder" /></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                  <td>Harga</td>
                  <td><Form.Control type="email" placeholder="placeholder" /></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                  <td>Foto</td>
                  <td><Form.Control type="email" placeholder="placeholder" />
                  <Form.Text className="text-muted">
                File Size max. 2MB
                </Form.Text></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                  <td>Start Rent</td>
                  <td><Form.Text className="text-muted">-</Form.Text></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                  <td>Finish Rent</td>
                  <td><Form.Text className="text-muted">-</Form.Text></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                  <td> Created At</td>
                  <td><Form.Text className="text-muted">-</Form.Text></td>
              </tr>
        </tbody>
        <tbody>
              <tr>
                  <td> Updated At</td>
                  <td><Form.Text className="text-muted">-</Form.Text></td>
              </tr>
        </tbody>
        </Table>
        <div id='tomb'>
        <Button variant="outline-primary">Cancel</Button>
        <Button variant="primary">Save</Button>
        </div>
    </div>
  )
}
