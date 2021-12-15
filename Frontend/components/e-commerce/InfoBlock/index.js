import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import production from "public/images/e-commerce/home/infoblock1.svg";
import resources from "public/images/e-commerce/home/infoblock2.svg";
import delivery from "public/images/e-commerce/home/infoblock3.svg";
import s from './InfoBlock.module.scss';

const InfoBlock = () => (
    <>
        <hr />
        <div className={s.info}>
            <Container className={"h-100"}>
            <Row
                className={
                "h-100 justify-content-between flex-column flex-md-row align-items-center"
                }
            >
                <Col
                xs={12}
                md={4}
                className={`h-100 d-flex align-items-center ${s.info__item} justify-content-center`}
                >
                <section className={"d-flex align-items-center"}>
                    <img src={production} className={"mr-3"} />
                    <div>
                    <h5 className={"fw-bold text-uppercase"}>Fair Production</h5>
                    <p className={"text-muted mb-0"}>With appropriate wages</p>
                    </div>
                </section>
                </Col>
                <Col
                xs={12}
                md={4}
                className={`h-100 d-flex align-items-center ${s.info__item} justify-content-center`}
                >
                <section className={"d-flex align-items-center"}>
                    <img src={resources} className={"mr-3"} />
                    <div>
                    <h5 className={"fw-bold text-uppercase"}>Ecological resources</h5>
                    <p className={"text-muted mb-0"}>
                        For a high quality
                    </p>
                    </div>
                </section>
                </Col>
                <Col
                xs={12}
                md={4}
                className={`h-100 d-flex align-items-center ${s.info__item} justify-content-center`}
                >
                <section className={"d-flex align-items-center"}>
                    <img src={delivery} className={"mr-3"} />
                    <div>
                    <h5 className={"fw-bold text-uppercase"}>free shipping</h5>
                    <p className={"text-muted mb-0"}>On all orders over $100</p>
                    </div>
                </section>
                </Col>
            </Row>
            </Container>
        </div>
        <hr />
    </>
)

export default InfoBlock;