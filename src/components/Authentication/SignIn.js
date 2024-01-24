
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../ContextApi/ContextAuth';


const SignIn = () => {
  const {signIn} = useContext(AuthContext)

  const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname|| '/';

  //from Handler working start
    const fromSubmitHandler = (event) =>{
         event.preventDefault()
         const email = event.target.email.value;
         const password = event.target.password.value;
         console.log(email,password)

            //Firbase working start
           signIn(email,password)
             .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
      event.target.reset()
    // ...
     Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login Successful',
          showConfirmButton: false,
          timer: 1500
        })
        navigate(from,{replace:true});
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage)
  });
         //Firbase working End
    }
      //from Handler working end

    return (
                 <Container className='w-25 mx-auto'>
        <h3 className='text-center'>Please Login</h3>
                 <Form onSubmit={fromSubmitHandler}>
 <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" id='email' placeholder="Enter email" />
  
      </Form.Group>



      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" id='password' placeholder="Password" />
      </Form.Group>
  
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br />
      <Form.Text className='text-danger'>
        Don't have an Account ? <Link style={{textDecoration: 'none'}} className='text-info' to="/signup">Register</Link>
      </Form.Text>
    </Form>
       </Container>
    );
};

export default SignIn;