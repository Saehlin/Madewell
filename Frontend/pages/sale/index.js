import React from "react";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import mainBanner from "public/images/e-commerce/main_banner.jpg"
import s from "./Sale.module.scss";

import InfoBlock from 'components/e-commerce/InfoBlock';
import Head from "next/head";

const Sale = () => {

  const [width, setWidth] = React.useState(1440);

  React.useEffect(() => {
    typeof window !== "undefined" &&
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [])
  return (
    <>
      <Head>
        <title>Sale</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <ToastContainer />
      <Container className={s.bannersContainer} style={{ marginTop: 100 }}>
        <Row>
          <Col md={12}>
            <Link href="/shop">
              <div className={s.mainBanner}>
                <img src={mainBanner} alt="banner" />
                <h2>BIG SALE</h2>
              </div>
            </Link>
          </Col>
          <Col md={6} xs={12}>
            <Link href="/shop">
              <div className={`${s.categoryBlock}`}>
                <div className={s.rightDiscount}>SPRING SALE</div>
              </div>
            </Link>
          </Col>
          <Col md={6} xs={12}>
            <Link href="/shop">
              <div className={`${s.banner3}`}>
                <div className={s.textContent}>
                  <div style={{backgroundColor: 'rgba(253, 253, 253, 0.5)', padding: 10}}>
                    <span>Dresses</span>
                    <strong>Korean Style</strong>
                    <b>View Collection</b>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} xs={12}>
            <Link href="/shop">
              <div className={s.banner4}>
                <div>
                  <span>up to 60%</span>
                  <strong>Buy Now</strong>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} xs={12}>
          <Link href="/shop">
              <div className={`${s.banner2}`}>
                <div className={s.textContent}>
                  <div style={{backgroundColor: 'rgba(253, 253, 253, 0.5)', padding: 10}}>
                    <strong>Live Again</strong>
                    <b>View Collection</b>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={3} xs={12}>
            <Link href="/shop">
              <div className={s.banner5}>
                <strong>Soft Style</strong>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
      <InfoBlock />
    </>
  );
};


export default Sale;
