import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./UserLogin.css";
import axiosinstance from "../axiosurl";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
  
    axiosinstance
      .post("/Userlogin", { email, password })
      .then((res) => {
        console.log(res);
        
        localStorage.setItem("User", res.data.message);
        // Navigate
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="User_container">
      <div className="User_login">
        <Form className="mt-5">
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
            <Form.Label column sm={1} className="me-5">
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                value={email}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-4"
            controlId="formHorizontalPassword"
          >
            <Form.Label column sm={1} className="me-5">
              Password
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.password);
                }}
                name="password"
                value={password}
              />
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

          <Form.Group as={Row} className="mb-3 ">
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type="submit" onClick={handleLogin}>
                Sign in
              </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default UserLogin;
