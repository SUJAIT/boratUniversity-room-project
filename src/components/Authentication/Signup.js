import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../ContextApi/ContextAuth';



const Signup = () => {
    const {createUser} = useContext(AuthContext)


const navigate = useNavigate()

const fromSubmitHandler =(event)=>{
    event.preventDefault()
    const email = event.target.email.value;
    const password=event.target.password.value;
    const name=event.target.name.value;
    console.log(email,password,name)

     //  firbase working start
             createUser(email,password)
          .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user)
    event.target.reset()
   Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Succesfully Created New User',
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // setError(errorMessage)
    console.log(errorCode,errorMessage)
  });
        //  firbase working End
}



    return (
       <Container className='w-25 mx-auto'>
        <h3 className='text-center'>Register</h3>
                 <Form onSubmit={fromSubmitHandler}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" name='name' placeholder="Enter name" />
      </Form.Group>


 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
  
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
       
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className='text-success'>
        You Have an Account ? <Link style={{textDecoration: 'none'}} className='text-info' to="/login">Log-in</Link>
      </Form.Text>
    </Form>
       </Container>
    );
};

export default Signup;