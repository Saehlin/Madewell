import React from "react";
import { Container, Row, Col } from "reactstrap";
import img1 from "public/images/e-commerce/about/img1.jpg";
import img2 from "public/images/e-commerce/about/img2.jpg";
import s from "./About.module.scss";
import Head from "next/head";

const Index = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <Container className={"mb-5"} style={{ marginTop: 100 }}>
        <Row>
          <Col lg={7} md={7} xs={12}>
            <h3 className="fw-bold mb-5">About Us</h3>
            <div style={{ position: "relative" }} className="mb-5">
              <h1
                style={{
                  fontSize: 88,
                  color: "#f5f5f5",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                }}
                className="fw-bold"
              >
                01
              </h1>
              <div style={{ paddingLeft: 67, paddingTop: 28 }}>
                <h6 className="text-primary text-uppercase mb-3 fw-bold">
                  Sustainability
                </h6>
                <h4 className="fw-bold mb-4" style={{ width: "80%" }}>
                  "The greatest threat to our planet is the belief that someone
                  else will save it.”
                </h4>
                <p className={`${s.text}`}>
                  - Robert Swan OBE, Polar explorer and environmentalist. <br />
                  In order to leave a better world not only for us, but also for
                  our children and grandchildren, we take good coexistence with
                  nature very seriously and makes it one of our biggest goals.{" "}
                </p>
                <div className={`${s.borderLine}`} />
                <hr className="mt-4" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="mb-5">
              <h1
                style={{
                  fontSize: 88,
                  color: "#f5f5f5",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                }}
                className="fw-bold"
              >
                02
              </h1>
              <div style={{ paddingLeft: 67, paddingTop: 28 }}>
                <h6 className="text-primary text-uppercase mb-3 fw-bold">
                  Equity
                </h6>
                <h4 className="fw-bold mb-4" style={{ width: "80%" }}>
                  In the end we are all human beings
                </h4>
                <p className="text-muted" style={{ width: "93%" }}>
                  Chance should not determine how well we do in life. We stand
                  for fairness for all people and want to make the world a
                  little better not only through fair compensation along the
                  entire production chain, but also through kindness.{" "}
                </p>
                <div className={`${s.borderLine}`} />
                <hr className="mt-4" />
              </div>
            </div>
            <div style={{ position: "relative" }} className="mb-5">
              <h1
                style={{
                  fontSize: 88,
                  color: "#f5f5f5",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  zIndex: -1,
                }}
                className="fw-bold"
              >
                03
              </h1>
              <div style={{ paddingLeft: 67, paddingTop: 28 }}>
                <h6 className="text-primary text-uppercase mb-3 fw-bold">
                  Design
                </h6>
                <h4 className="fw-bold mb-4" style={{ width: "80%" }}>
                  Anyone can follow trends, style is what you do with them
                </h4>
                <p className="text-muted" style={{ width: "93%" }}>
                  Design has always been a passion of ours. From an early age we
                  were enthusiastic about it and want to inspire the fashion
                  world with our timeless cuts and edgier pieces. Because you
                  can also have style with heart!{" "}
                </p>
                <div className={`${s.borderLine}`} />
                <hr className="mt-4" />
              </div>
            </div>
          </Col>
          <Col lg={5} md={5} xs={12} className="d-flex flex-column">
            <img src={img1} alt="img1" className={`${s.aboutImg} mb-5`} />
            <img src={img2} alt="img2" className={s.aboutImg} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps() {

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Index;
