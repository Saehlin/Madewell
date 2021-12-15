import React from "react";
import s from "./Footer.module.scss";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import Google from "public/images/e-commerce/Google";
import Twitter from "public/images/e-commerce/Twitter";
import Linkedin from "public/images/e-commerce/Linkedin";
import Facebook from "public/images/e-commerce/Facebook";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <>
          <hr className={s.footer__hr} />
          <Row className={"my-5 justify-content-between"}>
            <Col md={9} xl={7} sm={12} style={{ paddingRight: "150px" }}>
              <Row className={s.linksRow}>
                <Col md={4} sm={6} xs={12}>
                  <h5 className={"text-white fw-bold text-uppercase mb-4"}>
                    shop
                  </h5>
                  <Link href="/shop">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Women</h6>
                  </Link>
                  <Link href="/shop">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Men</h6>
                  </Link>
                  <Link href="/shop">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Kids</h6>
                  </Link>
                  <Link href="/shop">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Sale</h6>
                  </Link>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <h5 className={"text-white fw-bold text-uppercase mb-4"}>
                    service
                  </h5>
                  <Link href="/login">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Sign In</h6>
                  </Link>
                  <Link href="/faq">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Recyling</h6>
                  </Link>
                  <Link href="account">
                    <h6 className={`mb-3 ${s.navigationLink}`}>
                      Order Tracking
                    </h6>
                  </Link>
                  <Link href="/faq">
                    <h6 className={`mb-3 ${s.navigationLink}`}>
                      Payment Information
                    </h6>
                  </Link>
                </Col>
                <Col md={4} sm={6} xs={12}>
                  <h5
                    className={
                      "text-white fw-bold text-uppercase text-nowrap mb-4"
                    }
                  >
                    information
                  </h5>
                  <Link href="/faq">
                    <h6 className={`mb-3 ${s.navigationLink}`}>FAQ</h6>
                  </Link>
                  <Link href="/account">
                    <h6 className={`mb-3 ${s.navigationLink}`}>Data Privacy</h6>
                  </Link>
                  <Link href="/shop">
                    <h6 className={`mb-3 ${s.navigationLink}`}>
                      Online Stores
                    </h6>
                  </Link>
                  <Link href="/about">
                    <h6 className={`mb-3 ${s.navigationLink}`}>
                      Terms & Conditions
                    </h6>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col
              xl={5}
              md={3}
              className={"d-flex flex-column justify-content-between"}
              style={{ paddingLeft: "150px" }}
            >
              <div>
                <h5 className={"text-white fw-bold"} style={{fontFamily: "Sulphur Point"}}>
                  <img width="40" height="40" src="/favicon.ico" alt="logo" />
                  Madewell
                </h5>
                <div style={{ paddingLeft: 15 }}>
                  <p className={"text-white fw-thin mb-1,5"}>Berlin, Germany</p>
                  <p className={"text-white fw-thin mb-1,5"}>+49 30/12345678</p>
                  <p className={"text-white fw-thin mb-1,5"}>
                    contact@madewell.de
                  </p>

                  <Link href="/contact">
                    <h6
                      className={`mb-3 ${s.navigationLink}`}
                      style={{ paddingTop: "15px", color: "#e5a598" }}
                    >
                      Get in touch here
                    </h6>
                  </Link>
                </div>
              </div>
              <div className={s.socialLinks} style={{ paddingLeft: 15 }}>
                <Link href="https://madewell.herokuapp.com">
                  <a
                    className={s.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Google />
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={s.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter />
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className={s.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook />
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </>
        <hr className={`${s.footer__hr} mb-0`} />
        <Row style={{ padding: "30px 0" }}>
          <Col sm={12}>
            <p className={"text-muted mb-0"}>
              © 2021 powered by <span style={{ fontFamily: "Sulphur Point" }}>Madewell</span>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
