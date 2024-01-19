import React from 'react'
import Card from 'react-bootstrap/Card';
import UserNav from './UserNav';
import "./Notification.css"

function Notification() {
  return (
    <div className='notification_page'>
        <UserNav/>
        <Card className='mt-5' >
      <Card.Body>Notification 1</Card.Body>
    </Card>
    <Card className='mt-5'>
      <Card.Body>Notification 2</Card.Body>
    </Card>
    <Card className='mt-5'>
      <Card.Body>Notification 3</Card.Body>
    </Card>


    </div>
  )
}

export default Notification