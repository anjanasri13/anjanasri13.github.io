import React from 'react'
import { Form1 } from '../styles/HomeStyles'
import Form from "react-bootstrap/Form";

export default function Form5() {
  return (
    <Form1>
        <Form.Control
                  type="text"
                  placeholder="Last Name"
                //   style={{
                //     borderStyle: "none",
                //     backgroundColor: "#F5F5F5",
                //     borderRadius: "12px",
                
                //   }}
                />
    </Form1>
  )
}
