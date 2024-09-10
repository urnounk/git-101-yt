import React from 'react';
import Nav from 'react-bootstrap/Nav';
import './App.css'; 

function Nav1({ setActiveTab }) {
  const linkStyle = {
    fontSize: '20px',
    color: '#000000',
  };



  return (
    <Nav defaultActiveKey="bestseller" as="ul" onSelect={(selectedKey) => setActiveTab(selectedKey)}>
      <Nav.Item as="li">
        <Nav.Link eventKey="bestseller" style={linkStyle}>
          สินค้าขายดี
        </Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="buy1get1" style={linkStyle}>
          1 แถม 1
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}


export default  Nav1;