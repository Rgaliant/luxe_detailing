import React, { useState } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [contact, setContact] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("/api/contacts", contact).then(res => {
      alert("success");
    });
  };

  return (
    <Form
      style={{ position: "relative", marginBottom: "15em" }}
      // onSubmit={handleSubmit}
    >
      <Form.Input
        label="Name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  );
};

export default ContactForm;
