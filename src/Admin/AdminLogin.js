import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";


function AdminLogin() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  let Adminemail = "Admin1@gmail.com"
  let Adminpassword = "Admin@123"
const submitLogin = (e)=>{
  e.preventDefault()
  console.log(email, password);
  if(Adminemail===email && Adminpassword === password){
    localStorage.setItem("email", "Admin1@gmail.com")
    navigate("/Adminhome")
  }
  else{
    alert("Please enter correct email and password ! ")
  }
}

  return (
    <div className="Admin_container">
     
     <div className="Admin_login"> 
     <Form className="mt-5 " >
              <Form.Group
                as={Row}
                className="mb-4"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1} className="me-5">
                  Email
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="email" placeholder="Email" onChange={(e) => { 
                  setEmail(e.target.value);
                 
                }}/>
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
              
                controlId="formHorizontalPassword" className="mb-3"
              >
                <Form.Label column sm={1} className="me-5">
                  Password
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="password" placeholder="Password" onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Col sm={10}></Col>
                </Form.Group>
              </fieldset>
              <Form.Group
                as={Row}
                className="mb-3 "
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit" onClick={submitLogin}>Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
     </div>
     
    </div>
  );
}

export default AdminLogin;


{/* <Form>
              <Form.Group
                as={Row}
                className=""
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={1}>
                  Email
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
              
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={1}>
                  Password
                </Form.Label>
                <Col sm={3}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="">
                  <Col sm={10}></Col>
                </Form.Group>
              </fieldset>
              <Form.Group
                as={Row}
                className=" "
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </Form.Group>
            </Form> */}
