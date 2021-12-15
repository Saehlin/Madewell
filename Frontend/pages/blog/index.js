import React, { useState, useEffect } from "react";
import { Container, Row, Col, Input } from "reactstrap";
import axios from 'axios';
import Link from "next/link";
import article1 from "public/images/e-commerce/home/article1.jpg";
import article2 from "public/images/e-commerce/home/article2.jpg";

import Head from "next/head";
import s from './Blog.module.scss';


const Index = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("/blogs").then((res) => {
      setBlogs([...res.data.rows]);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <Container className={"mb-5"} style={{ marginTop: 100 }}>
        <Row>
          <Col xs={12} lg={8}>
            <h3 className="fw-bold mb-5">Blog</h3>
            {blogs.length > 0 && blogs.map(post => {
            return (
              <div className={s.blogPost}>
                <div key={post.id}>
                  <Link href={`blog/article/${post.id}`}>
                <a className={s.blogPostImgWrap}>
                  <img src={post.hero_image[0].publicUrl} alt="img1" className="mb-4 img-fluid" />
                </a>
              </Link>
              <h6 className={`${s.author_name}`}>
                {post.author_name}
              </h6>
              <Link href={`blog/article/${post.id}`}>
                <a className={`text-dark ${s.post_title}`}>
                  <h4 className="fw-bold">
                    {post.title}
                  </h4>
                </a>
              </Link>
              <p className={`${s.post_epigraph}`}>
                {post.epigraph}{" "}
              </p>
              <p className={`${s.post_date}`}>{post.createdAt.toString().slice(0, 10)}</p>
                </div>
              </div>
            )
          })}
          </Col>
          <Col xs={12} lg={4}>
            <h3 className="fw-bold mb-4">Search</h3>
            <Input
              type="search"
              name="text"
              id="exampleEmail"
              className="w-100 blog-search"
              placeholder={"Index in blog"}
            />
            <hr className={"my-5"} />
            <h6 className={"text-uppercase fw-bold mb-4"}>Categories</h6>
            <div className={`${s.categroryWrapper} d-flex justify-content-between mt-3`}>
              <p className={s.categoryLink}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                    Fashion Trends
                </a>
              </Link>
              </p>
                <p className={s.categoryAmount}>
                3
              </p>
            </div>
            <div className={`${s.categroryWrapper} d-flex justify-content-between mt-3`}>
              <p className={s.categoryLink}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                    Styling Tips
                </a>
              </Link>
              </p>
              <p className={s.categoryAmount}>
                6
              </p>
            </div>
            <div className={`${s.categroryWrapper} d-flex justify-content-between mt-3`}>
              <p className={s.categoryLink}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                    Outfits
                </a>
              </Link>
              </p>
              <p className={s.categoryAmount}>
              1
              </p>
            </div>
            <div className={`${s.categroryWrapper} d-flex justify-content-between mt-3`}>
              <p className={s.categoryLink}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                    Seasons in Fashion
                </a>
              </Link>
              </p>
              <p className={s.categoryAmount}>
              4
              </p>
            </div>
            <div className={`${s.categroryWrapper} d-flex justify-content-between mt-3`}>
              <p className={s.categoryLink}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                  Sustainability
                </a>
              </Link>
              </p>
              <p className={s.categoryAmount}>
              3
              </p>
            </div>
            <div className={`${s.categroryWrapper} d-flex justify-content-between mt-3`}>
              <p className={s.categoryLink}>
              <Link href={"/blog/article"}>
                <a className={"text-dark"}>
                    Behind The Scenes
                </a>
              </Link>
              </p>
              <p className={s.categoryAmount}>
              2
              </p>
            </div>
            <hr className={"my-5"} />
            <h3 className={"fw-bold mb-5"}>Recent Posts</h3>
            <Row>
              <Col xs={12} className={"mb-4 d-flex flex-column"}>
                <Link href={"/blog/article"}>
                  <a>
                    <img src={article1} className={"img-fluid"} />
                  </a>
                </Link>
                <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      className={"fw-bold font-size-base mt-1"}
                      style={{ fontSize: 16, color: "#232323" }}
                    >
                      Why is Waste so Bad?
                    </h6>
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      style={{ fontSize: 16 }}
                      className={"fw-bold text-primary"}
                    >
                      Read More
                    </h6>
                  </a>
                </Link>
              </Col>
              <Col xs={12} className={"mb-4 d-flex flex-column"}>
                <Link href={"/blog/article"}>
                  <a>
                    <img src={article2} className={"img-fluid"} />
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <p className={"mt-3 text-muted mb-0"}>March 12, 2020</p>
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      className={"fw-bold font-size-base mt-1"}
                      style={{ fontSize: 16, color: "#232323" }}
                    >
                      Best Examples of Maximalism
                    </h6>
                  </a>
                </Link>
                <Link href={"/blog/article"}>
                  <a>
                    <h6
                      style={{ fontSize: 16 }}
                      className={"fw-bold text-primary"}
                    >
                      Read More
                    </h6>
                  </a>
                </Link>
              </Col>
            </Row>
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
