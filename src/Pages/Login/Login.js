import React, { useState } from 'react'
import Logo from '../../Assets/img/Rectangle 62.png'
import bg from '../../Assets/img/background.png'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../Login/Login.css'

export const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPasswoard] = useState("");

    const handleInput = (event) =>{
      if(event.target.id==='email'){
        setEmail(event.target.value)
      } else if(event.target.id==='password'){
        setPasswoard(event.target.value)
      }
    }

    const validasi = () =>{
      let passwordcorrect = 1234567890
      let emailcorrect = 'yustika@gmail.com'

      if (email===emailcorrect){
        if (password=== passwordcorrect){
          
        }
        else{
          alert('password masih salah')
        }
      }
      else{
        
      }
    }
  return (
    <div>
    <Row id='row'>
    <Col sm={6} id='background'><img src={bg} id='bg'></img></Col>
    <Col sm={4}>
    <Container className='login'>
        <img src={Logo}></img><p></p>
        <h3>Welcome, Admin BCR</h3><p></p>
        <Form>
            <div className="form-group">
                <label>Email</label>
                <input onChange={(event) => {handleInput(event)}} type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input onChange={(event) => {handleInput(event)}} type="password" className="form-control" placeholder="Enter password" />
            </div>
        </Form>
        <Button variant="primary" type="submit" size="md" id='btn'><a href='http://localhost:3000/Dashboard'>Log In</a></Button>
      </Container>
    </Col>
    </Row>
    </div>
  )
}