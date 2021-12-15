import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import img from "public/images/e-commerce/contact/img.png";

import s from './Contact.module.scss';
import Head from "next/head";

const Index = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const updateForm = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <Container>
        <Row className={"mb-5"} style={{ marginTop: 100 }}>
          <Col lg={6} sm={12} className="d-flex flex-column justify-content-center">
            <div>
              <h2 className={"fw-bold"}>Contact Us</h2>
              <h6 className={"text-muted"}>
              If you have any questions please fill out the form
              </h6>
            </div>
            <Form>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold text-muted">
                  Name
                </Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleEmail"
                  className="w-100"
                  value={name} onChange={(e) => setName(e.target.value)}
                />
              </FormGroup>
              <FormGroup className="d-flex">
                <div className="flex-fill mr-5">
                  <Label for="exampleEmail" className="fw-bold text-muted">
                    Email
                  </Label>
                  <Input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} id="exampleEmail1" />
                </div>
                <div className="flex-fill">
                  <Label for="exampleEmail" className="fw-bold text-muted">
                    Phone
                  </Label>
                  <Input type="phone" name="text" id="exampleEmail" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </FormGroup>
              <FormGroup>
                <Label for="exampleEmail" className="fw-bold text-muted">
                  Your Message
                </Label>
                <Input
                  value={message} onChange={(e) => setMessage(e.target.value)}
                  type="textarea"
                  name="text"
                  id="exampleEmail"
                  className="w-100"
                  style={{ height: 155 }}
                />
              </FormGroup>
            <FormGroup>
            <Button
              color="primary"
              className="text-uppercase fw-bold align-self-start"
              type={"submit"}
              onClick={updateForm}
            >
              send message
            </Button>
            </FormGroup>
            </Form>
          </Col>
          <Col lg={6} sm={12} className={s.contactVisual}>
            <img src={img} alt="contact" style={{height: "500px"}} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {  }, // will be passed to the page component as props
  };
}

export default Index;
