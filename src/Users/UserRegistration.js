import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./UserRegistration.css";
import axiosinstance from "../axiosurl";
import validator from "validator"

function UserRegistration() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpwd: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });
  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);

    // console.log({...form, [e.target.name]:e.target.value});

    // console.log(e.target.value);
    // console.log(e.target.name);
  };

const SubmitData = (e) => {
  e.preventDefault();

  if (!validator.isStrongPassword(form.password)) {
    alert("Password must be at least 8 characters long and include uppercase, lowercase, and special characters.");
    return;
  }

  if (form.password !== form.confirmpwd) {
    alert("Password not matching!");
    return;
  }

  if (!validator.isNumeric(form.pincode)) {
    alert("Pincode must contain only numeric characters.");
    return;
  }

  axiosinstance.post("/userregistration", {...form })
    .then((res) => {
      // console.log(res);
      // Reset the form after successful submission
      setForm({
        name: "",
        email: "",
        password: "",
        confirmpwd: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
      });
      alert(res.data.message);
    })
    .catch((err) => {
      console.log(err);
      alert("Error occurred during registration. Please try again.");
    });
};

  return (
    <div className="Reg_container">
      <Form onSubmit={SubmitData}>
        <Row className="mb-3 ms-5 mt-5">
          <Form.Label className="mb-3" id="title">
            Register with Us here
          </Form.Label>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              onChange={HandleChange}
              name="name"
              value={form.name}
              type="name"
              placeholder="Enter Name" required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={HandleChange}
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email" required
            />
          </Form.Group>
        </Row>
        <Row className="mb-3 ms-5 mt-5">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={HandleChange}
              name="password"
              value={form.password}
              type="password"
              placeholder="Enter Password" required
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRepassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              onChange={HandleChange}
              name="confirmpwd"
              value={form.confirmpwd}
              type="password"
              placeholder="Re-type Password" required
            />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3 ms-5 address" controlId="formGridAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            onChange={HandleChange}
            name="address"
            value={form.address}
            placeholder="Apartment or floor" required
          />
        </Form.Group>

        <Row className="mb-3 ms-5">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={HandleChange}
              name="city"
              value={form.city} required
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select
              onChange={HandleChange}
              name="state"
              value={form.state}
              defaultValue="Choose..." required
            >
              <option>Choose...</option>
              <option>Kerala</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Pin code</Form.Label>
            <Form.Control
              onChange={HandleChange}
              name="pincode"
              value={form.pincode} required
            />
          </Form.Group>
        </Row>

        <Button className="ms-5 mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UserRegistration;
