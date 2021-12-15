import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import headerImg from "public/images/e-commerce/blog/article/header.png";
import articleImg from "public/images/e-commerce/blog/article/article-image.png";
import person from "public/images/e-commerce/blog/article/person.png";
import s from "./Article.module.scss";
import article1 from "public/images/e-commerce/home/article1.jpg";
import article2 from "public/images/e-commerce/home/article2.jpg";
import article3 from "public/images/e-commerce/home/article3.jpg";
import Head from "next/head";

const Blog = () => {
  return (
    <>
      <Head>
        <title>Sustainability concerns us all</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <img
        src={headerImg}
        alt={"header"}
        className={`"w-100 ${s.heroImage}`}
        style={{ marginTop: 32, maxHeight: 440 }}
      />
      <Container className={"mb-5 mt-5 d-flex flex-column align-items-center"}>
        <Row style={{ maxWidth: 700 }}>
          <Col md={12}>
            <h1 className={`${s.title} fw-bold mb-0`}>
              Sustainability concerns us all
            </h1>
            <blockquote
              className={"d-flex"}
              style={{ marginTop: 35, marginBottom: 40 }}
            >
              <div className={"d-flex flex-column"}>
                <div
                  className={"d-flex align-items-center"}
                  style={{ marginBottom: 35 }}
                >
                  <img
                    src={person}
                    alt="person"
                    className={"mr-3"}
                    style={{ width: 50 }}
                  />
                  <p
                    className={`${s.author_name} text-uppercase fw-bold text-primary mb-0`}
                  >
                    By James Lee Cooper
                  </p>
                </div>
                <h5 className={`${s.epigraph} fw-bold mb-0`}>
                  We all love our earth in one way or another. That's why it's
                  important that we work together to save it.
                </h5>
              </div>
            </blockquote>
            <p className={s.paragraph}>
              Most people now know that we humans produce too many greenhouse
              gases and too much waste. And most people know that this cannot
              continue. There are various ways in which we can finally move in a
              positive direction.
            </p>
          </Col>
        </Row>
        <Row className={"mt-5"}>
          <Col xs={12}>
            <img src={articleImg} alt={"article"} className={s.blogImage} />
            <p className={"text-muted mt-3"}>
              There are a lot of things on earth that are worth saving.
            </p>
          </Col>
        </Row>
        <Row style={{ maxWidth: 700 }} className={"mt-5"}>
          <Col md={12}>
            <p className={s.paragraph}>
              For example, better manufactured things can be bought. Of course,
              this is possible via our store. But it goes beyond clothes. With
              everyday objects, technology, even food, you have to ask: How was
              this produced? We also have to stop buying more and more, even if
              we don't really need anything new. Because then automatically less
              is produced and the environment is less polluted.
            </p>
            <hr className={"mt-5"} />
            <div className={`${s.bulletPoints} d-flex flex-column w-100`}>
              <div className={"d-flex justify-content-center mt-4"}>
                <div className={s.number}>1</div>
                <div style={{ width: 600 }}>
                  <h6 className={"fw-bold mb-4"}>
                    Everyone can make a contribution
                  </h6>
                  <p>
                    No matter how small, no matter how trivial it seems to us:
                    together we can do it.
                  </p>
                </div>
              </div>
              <div className={"d-flex justify-content-center mt-5"}>
                <div className={s.number}>2</div>
                <div style={{ width: 600 }}>
                  <h6 className={"fw-bold mb-4"}>
                    It's not just about us humans
                  </h6>
                  <p>
                    Both animals and plants are suffering at the moment. This
                    does not have to continue.
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={"text-center fw-bold mb-4"}>More From Our Blog</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              If you want to read more exciting things, you can check out more
              blog posts about fashion and sustainability:
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <Link href="/blog/article/07aeff53-31e5-4276-8307-f855b22b6436">
              <img src={article1} className={"img-fluid"} />
            </Link>
            <p className={"mt-3 text-muted mb-0"}>September 09, 2021</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              Wild Patterns
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              <Link href="/blog/article/07aeff53-31e5-4276-8307-f855b22b6436">
                Read More
              </Link>
            </h6>
          </Col>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <Link href="/blog/article/c4245ff9-6a53-4b13-8539-0b69b442cfd1">
              <img src={article2} className={"img-fluid"} />
            </Link>
            <p className={"mt-3 text-muted mb-0"}>June 12, 2021</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              Amber Tones
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              <Link href="/blog/article/c4245ff9-6a53-4b13-8539-0b69b442cfd1">
                Read More
              </Link>
            </h6>
          </Col>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <Link href="/blog/article/57fbad3f-528a-43b2-83e8-32ba30708194">
              <img src={article3} className={"img-fluid"} />
            </Link>
            <p className={"mt-3 text-muted mb-0"}>May 28, 2021</p>
            <h6
              className={"fw-bold font-size-base mt-1"}
              style={{ fontSize: 16 }}
            >
              Distant Shores are Waiting For You
            </h6>
            <h6 style={{ fontSize: 16 }} className={"fw-bold text-primary"}>
              <Link href="/blog/article/57fbad3f-528a-43b2-83e8-32ba30708194">
                Read More
              </Link>
            </h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  // const res = await axios.get("/products");
  // const products = res.data.rows;

  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Blog;
