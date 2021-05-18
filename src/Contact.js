import React from 'react'
import {Card } from 'react-bootstrap'
import Call from './call-removebg-preview.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const contact = () => {
    return (
        <Card className='text-center color'>
        <Card.Header as="h5">Contact Me</Card.Header>
        <Card.Body className='color' >
          <Card.Title><h2>I am A Front End Developer and an Otaku </h2></Card.Title>
          <img src={Call} alt="" />
          <Card.Text>
            Contact me with the following Links
          </Card.Text>
            <Card.Link href="https://twitter.com/vikkybliz" target='_blank'><TwitterIcon fontSize="large" /></Card.Link>
            <Card.Link href="https://www.linkedin.com/in/vikkybliz" target='_blank'><LinkedInIcon fontSize="large" style={{color: '#0e76a8'}} /></Card.Link>
            <Card.Link href="https://instagram.com/vikkybliz" target='_blank'><InstagramIcon fontSize='large' style={{color: '#833AB4'}} /></Card.Link>
            <Card.Link href="https://github.com/vikkybliz" target='_blank'><GitHubIcon fontSize="large" style={{color: '#000000'}} /></Card.Link>
            <Card.Link href="https://wa.me/09016063280" target='_blank'><WhatsAppIcon fontSize="large" style={{color: '#075e54'}} /></Card.Link>
 
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    )
}

export default contact
