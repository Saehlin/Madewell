import React, { useState } from "react";
import { Container, Row, Col, Button, Table } from "reactstrap";
import { Form } from "react-bootstrap";
import Head from "next/head";
import s from "./Account.module.scss";
import settings from "public/images/e-commerce/account/settings.svg";
import avatar from "public/images/e-commerce/account/avatar.png";
import edit from "public/images/e-commerce/account/edit.svg";
import visa from "public/images/e-commerce/account/visa.svg";
import { useDispatch, useSelector } from "react-redux";
import { setVisibility } from '../../redux/actions/avatar';

const Index = () => {
  // @ts-ignore
  const visibility = useSelector(state => state.avatar.visibility);
  const dispatch = useDispatch();

  const [isSwitchOn, setIsSwitchOn] = useState(true);

  return (
    <>
      <Head>
        <title>Account</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <Container className={"mb-5"} style={{ marginTop: 100 }}>
        <Row>
          <Col xl={8} lg={8} xs={12}>
            <h3 className={"fw-bold mb-4"}>My Orders</h3>
            <Row className={"mt-5"}>
              <Col xl={12} lg={12} xs={12} style={{ overflow: "auto" }}>
                <Table className={s.accountTable} borderless>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                      <th className={"bg-transparent text-dark px-0"}>Date</th>
                      <th className={"bg-transparent text-dark px-0"}>
                        Product
                      </th>
                      <th className={"bg-transparent text-dark px-0"}>
                        Delivery
                      </th>
                      <th className={"bg-transparent text-dark px-0"}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={"mt-2"}>
                      <td className={"px-0 pt-4"}>
                        <p className={"text-muted"}>16.08.2021</p>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <div className={"d-flex align-items-center"}>
                          <img
                            src="/images/e-commerce/account/product1.jpg"
                            width={100}
                            className={"mr-4"}
                          />
                          <div>
                            <h6 className={"text-muted"}>Delivered</h6>
                            <h5 className={"fw-bold"}># 123345</h5>
                          </div>
                        </div>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <h6 className={"fw-bold mb-0"}>$5</h6>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <h6 className={"fw-bold mb-0"}>$69.99</h6>
                      </td>
                    </tr>
                    <tr>
                      <td className={"px-0 pt-4"}>
                        <p className={"text-muted"}>04.06.2021</p>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <div className={"d-flex align-items-center"}>
                          <img
                            src="/images/e-commerce/account/product2.jpg"
                            width={100}
                            className={"mr-4"}
                          />
                          <div>
                            <h6 className={"text-muted"}>Delivered</h6>
                            <h5 className={"fw-bold"}># 193565</h5>
                          </div>
                        </div>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <h6 className={"fw-bold mb-0"}>$5</h6>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <h6 className={"fw-bold mb-0"}>$84.99</h6>
                      </td>
                    </tr>
                    <tr style={{ borderBottom: "1px solid #D9D9D9" }}>
                      <td className={"px-0 pt-4"}>
                        <p className={"text-muted"}>22.03.2021</p>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <div className={"d-flex align-items-center"}>
                          <img
                            src="/images/e-commerce/account/product3.jpg"
                            width={100}
                            className={"mr-4"}
                          />
                          <div>
                            <h6 className={"text-muted"}>Delivered</h6>
                            <h5 className={"fw-bold"}># 117482</h5>
                          </div>
                        </div>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <h6 className={"fw-bold mb-0"}>$5</h6>
                      </td>
                      <td className={"px-0 pt-4"}>
                        <h6 className={"fw-bold mb-0"}>$54.99</h6>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={4} xs={12}>
            <section className={s.profile}>
              <Button className={"bg-transparent border-0 p-0"}>
                <img
                  src={settings}
                  alt={"settings"}
                  className={s.settingsIcon}
                />
              </Button>
              <Form className={"text-muted m-3"} >
                <Form.Check
                  onChange={(event) => dispatch(setVisibility(event.target.checked))}
                  type="switch"
                  id="avatar-switch"
                  label="Show Ava The Mouse"
                  checked={visibility}
                />
              </Form>
              <img src={avatar} alt={"avatar"} style={{ width: 80 }} />
              <h5 className={"fw-bold mt-4"} style={{color:"#9CB946"}}>Ike Zhu</h5>
              <p className={"text-muted"}>ike@fakemail.com</p>
              <hr />
              <div className={"w-100 mt-3"}>
                <div
                  className={"d-flex justify-content-between align-items-start"}
                >
                  <div style={{ width: 170 }}>
                    <h6 className={"fw-bold"}>Delivery Address</h6>
                    <p className={"text-muted mt-4"}>
                      Mr. Robbie Williams 94 Kings Road, London SW39 6AZ
                    </p>
                  </div>
                  <Button className={"bg-transparent border-0 p-0"}>
                    <img src={edit} alt={"edit"} />
                  </Button>
                </div>
              </div>
              <hr />
              <div className={"w-100 mt-3"}>
                <div
                  className={"d-flex justify-content-between align-items-start"}
                >
                  <div style={{ width: 170 }}>
                    <h6 className={"fw-bold"}>Payment Method</h6>
                    <div className={"d-flex align-items-center mt-4 mb-3"}>
                      <img src={visa} alt={"visa"} className={"mr-3"} />
                      <p className={"mb-0"}>•••• •••• •••• 5632</p>
                    </div>
                  </div>
                  <Button className={"bg-transparent border-0 p-0"}>
                    <img src={edit} alt={"edit"} />
                  </Button>
                </div>
              </div>
              <hr />
              <div className={"w-100 mt-3"}>
                <div
                  className={"d-flex justify-content-between align-items-start"}
                >
                  <div style={{ width: 170 }}>
                    <h6 className={"fw-bold"}>Billing Address</h6>
                    <p className={"text-muted mt-4"}>
                      Mr. Robbie Williams 94 Kings Road, London SW39 6AZ
                    </p>
                  </div>
                  <Button className={"bg-transparent border-0 p-0"}>
                    <img src={edit} alt={"edit"} />
                  </Button>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
