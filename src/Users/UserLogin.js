import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./UserLogin.css";

function UserLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const UserLogin = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="User_container">
      <div className="User_login">
        <Form className="mt-5" onSubmit={UserLogin}>
          <Form.Group as={Row} className="mb-4" controlId="formHorizontalEmail">
            <Form.Label column sm={1} className="me-5">
              Email
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={HandleChange}
                name="email"
                value={form.email}
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
                onChange={HandleChange}
                name="password"
                value={form.password}
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
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}

export default UserLogin;
