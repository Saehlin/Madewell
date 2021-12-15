import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import s from "./Error.module.scss";
import Head from "next/head";

const Index = () => (
  <>
    <Head>
      <title>404</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Ecological webshop" />
      <meta charSet="utf-8" />
    </Head>
    <Container>
      <Row className={"mb-5"} style={{ marginTop: 100 }}>
        <section className={s.error}>
          <Container className={"h-100"}>
            <Row className={"h-100"}>
              <Col sm={6}></Col>
              <Col
                sm={6}
                className={
                  "d-flex flex-column justify-content-center align-items-start"
                }
              >
                <h3 className={"fw-bold text-primary mb-3"}>OOPS!</h3>
                <h2 className={"fw-bold mb-4"}>Something’s Missing</h2>
                <p style={{ width: 300 }} className={"mb-5"}>
                Unfortunately, we cannot find the page you are looking for.
                </p>
                <Link href="/">
                    <Button outline color={"primary"} className={"fw-bold"}>
                        HOMEPAGE
                    </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Row>
    </Container>
  </>
);

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
