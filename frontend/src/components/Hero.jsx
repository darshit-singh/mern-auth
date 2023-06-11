import React from 'react'
import { Card, Container, Button } from 'react-bootstrap'

const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-colmn align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>MERN Authentication</h1>
                    <p className='text-center mb-4'>This is a boilerplate for MERN authentication that stores a JWT in an HTTP-Only cookie.</p>
                    <div className='d-flex'>
                        <Button variant='outline-primary' href='/login' className='me-3' size='lg'>Sign In</Button>
                        <Button variant='outline-secondary' href='/register' size='lg'>Sign Up</Button>
                    </div>
                </Card>
            </Container>
        </div>
    )
}

export default Hero