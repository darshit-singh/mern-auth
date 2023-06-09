import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'

const LoginScreen = () => {

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log('submit')
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>

      <Form onSubmit={submitHandler}>
        <Form.Group className='my-2' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter Email'
            value={email}
            onChange={() => { setEmail(e.target.value) }}>
          </Form.Control>
        </Form.Group>

        <Form.Group className='my-2' controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter Password'
            value={pass}
            onChange={() => { setPass(e.target.value) }}>
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary' className='mt-3'>
          Sign In
        </Button>

        <Row className='py-3'>
          <Col>
            New User? <Link to='/register'>Register Here</Link>
          </Col>
        </Row>
      </Form>

    </FormContainer>
  )
}

export default LoginScreen