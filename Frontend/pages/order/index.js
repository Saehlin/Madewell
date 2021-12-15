import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";
import s from "./Order.module.scss";
import Head from "next/head";

const Index = () => (
  <>
    <Head>
      <title>Thank you for your order!</title>
    </Head>
    <Container className={s.order} style={{ marginTop: 150 }}>
      <img width="100" height="100" src="/favicon.ico" alt="logo" style={{ marginBottom: 20 }}/>
      <h2 className={"fw-bold mb-4"}>Thank you for your order</h2>
      <p className={"mb-5"}>
        You will receive the order confirmation with all further details by
        mail and your Carrot Coins will be added to your account.
      </p>
      <Link href="/">
        <Button outline color={"primary"} className={"fw-bold"}>
          HOMEPAGE
        </Button>
      </Link>
    </Container>
  </>
);

export default Index;
