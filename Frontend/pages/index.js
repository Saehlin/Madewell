import React from "react";
import { Container, Row, Col, Modal } from "reactstrap";
import s from "pages/index.module.scss";
import Link from "next/link";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Head from "next/head";

import arrowRight from "public/images/e-commerce/home/arrow-right.svg";
import { Button } from "react-bootstrap";
import InfoBlock from "components/e-commerce/InfoBlock";
import article1 from "public/images/e-commerce/home/article1.jpg";
import article2 from "public/images/e-commerce/home/article2.jpg";
import article3 from "public/images/e-commerce/home/article3.jpg";

import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import rating from "../public/images/e-commerce/details/stars.svg";
import productsListActions from "../redux/actions/products/productsListActions";

const Index = ({ products: serverSideProducts }) => {
  const [quantity, setQuantity] = React.useState(1);
  const dispatchStore = useDispatch();
  const openReducer = (state, action) => {
    switch (action.type) {
      case "open0":
        return {
          ...state,

          open0: !state.open0,
        };
      case "open1":
        return {
          ...state,
          open1: !state.open1,
        };
      case "open2":
        return {
          ...state,

          open2: !state.open2,
        };
      case "open3":
        return {
          ...state,

          open3: !state.open3,
        };
      case "open4":
        return {
          ...state,

          open4: !state.open4,
        };
      case "open5":
        return {
          ...state,

          open5: !state.open5,
        };
      case "open6":
        return {
          ...state,

          open6: !state.open6,
        };
      case "open7":
        return {
          ...state,

          open7: !state.open6,
        };
      case "open8":
        return {
          ...state,

          open8: !state.open8,
        };
    }
  };
  const [secs, setSecs] = React.useState(23);
  const [products, setProducts] = React.useState(serverSideProducts);

  const [openState, dispatch] = React.useReducer(openReducer, {
    open0: false,
    open1: false,
    open2: false,
    open3: false,
    open4: false,
    open5: false,
    open6: false,
    open7: false,
    open8: false,
  });
  //@ts-ignore
  const currentUser = useSelector((store) => store.auth.currentUser);

  const addToCart = (id, quantity = 1) => {
    if (currentUser) {
      axios.post(`/orders/`, {
        data: {
          amount: quantity,
          order_date: new Date(),
          product: id,
          status: "in cart",
          user: currentUser.id,
        },
      });
      return;
    }
    const localProducts =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("products"))) ||
      [];
    localProducts.push({
      amount: quantity,
      order_date: new Date(),
      product: id,
      status: "in cart",
    });
    typeof window !== "undefined" &&
      localStorage.setItem("products", JSON.stringify(localProducts));
    dispatchStore(productsListActions.doAdd(localProducts));
  };

  const addToWishlist = (id) => {
    if (currentUser) {
      axios.put(`/users/${currentUser.id}`, {
        id: currentUser.id,
        data: {
          ...currentUser,
          wishlist: [id],
        },
      });
    }
    const localWishlist =
      (typeof window !== "undefined" &&
        JSON.parse(localStorage.getItem("wishlist"))) ||
      [];
    localWishlist.push({ amount: 1, product: id });
    typeof window !== "undefined" &&
      localStorage.setItem("wishlist", JSON.stringify(localWishlist));
  };

  const secsInterval = () => {
    let secsInt = setInterval(() => {
      if (secs === 0) {
        clearInterval(secsInt);
      }
      setSecs((prev) => --prev);
    }, 1000);
  };

  React.useEffect(() => {
    secsInterval();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <ToastContainer />
      <Carousel prevLabel="prev" nextLabel="next">
        <Carousel.Item interval={1000}>
          <section className={`${s.carousel} ${s.firstImg}`}>
            <Container className={"h-100"}>
              <Row className={"h-100"}>
                <Col
                  sm={12}
                  className={
                    "h-100 d-flex flex-column justify-content-center align-items-center align-items-md-end"
                  }
                  style={{marginTop: 100}}
                >
                  <h2 className={"mb-2"}>
                    start the season lightly
                  </h2>
                  <h1 className={"text-uppercase fw-bold mt-1"}>
                    like an ocean breeze
                  </h1>
                  <Link href={"/shop"}>
                    {typeof window !== "undefined" &&
                    window.innerWidth <= 768 ? (
                      <Button
                        color="primary"
                        className={"text-uppercase mt-4 fw-bold"}
                      >
                        buy now
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className={`text-uppercase mt-4 fw-bold d-flex align-items-center ${s.viewMoreBtn}`}
                      >
                        <p className={"mb-0"}>buy now</p>{" "}
                      </Button>
                    )}
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <section className={`${s.carousel} ${s.secondImg}`}>
            <Container className={"h-100"}>
              <Row className={"h-100"}>
                <Col
                  sm={12}
                  className={
                    "h-100 d-flex flex-column justify-content-center align-items-center align-items-md-end"
                  }
                  style={{marginTop: 100}}
                >
                  <h2 className={"mb-2"}>new collection</h2>
                  <h1 className={"text-uppercase fw-bold mt-1"}>
                    mother earth
                  </h1>
                  <Link href={"/shop"}>
                    {typeof window !== "undefined" &&
                    window.innerWidth <= 768 ? (
                      <Button
                        color="primary"
                        className={"text-uppercase mt-4 fw-bold"}
                      >
                        buy now
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className={`text-uppercase mt-4 fw-bold d-flex align-items-center ${s.viewMoreBtn}`}
                      >
                        <p className={"mb-0"}>buy now</p>{" "}
                      </Button>
                    )}
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <section className={`${s.carousel} ${s.thirdImg}`}>
            <Container className={"h-100"}>
              <Row className={"h-100"}>
                <Col
                  sm={12}
                  className={
                    "h-100 d-flex flex-column justify-content-center align-items-center align-items-md-end"
                  }
                  style={{marginTop: 100}}
                >
                  <h2 className={"mb-2"}>the good stuff</h2>
                  <h1 className={"text-uppercase fw-bold mt-1"}>
                    pretty in pink
                  </h1>
                  <Link href={"/shop"}>
                    {typeof window !== "undefined" &&
                    window.innerWidth <= 768 ? (
                      <Button
                        color="primary"
                        className={"text-uppercase mt-4 fw-bold"}
                      >
                        buy now
                      </Button>
                    ) : (
                      <Button
                        variant="primary"
                        className={`text-uppercase mt-4 fw-bold d-flex align-items-center ${s.viewMoreBtn}`}
                      >
                        <p className={"mb-0"}>buy now</p>{" "}
                      </Button>
                    )}
                  </Link>
                </Col>
              </Row>
            </Container>
          </section>
        </Carousel.Item>
      </Carousel>
      <InfoBlock />
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={`text-center fw-bold mb-4`}>New Arrivals</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              Check out the newest items! Anything you could need, not only fashionable but also sustainable.
            </p>
          </Col>
        </Row>
        <Row>
          {products.slice(0, 8).map((item, index) => (
            <Col
              sm={6}
              md={3}
              xs={12}
              className={`mb-4 ${s.product}`}
              key={index}
            >
              <Modal
                isOpen={openState[`open${index}`]}
                //@ts-ignore
                toggle={() => dispatch({ type: `open${index}` })}
              >
                <div className={s.modalWidndow}>
                  <div className={s.image}>
                    <img
                      src={item.image[0].publicUrl}
                      width={"100%"}
                      height={"100%"}
                    />
                  </div>
                  <div
                    className={`${s.content} p-4 d-flex flex-column justify-content-between`}
                  >
                    <Link href={`/products/${item.id}`}>
                      <a className={"fw-semi-bold"}>
                        More about product
                        <img
                          src={arrowRight}
                          alt={"arrow"}
                          className={"ml-2"}
                        />
                      </a>
                    </Link>
                    <h6 className={`text-muted`}>
                      {item.categories[0].title[0].toUpperCase() +
                        item.categories[0].title.slice(1)}
                    </h6>
                    <h4 className={"fw-bold"}>{item.title}</h4>
                    <div className={"d-flex align-items-center"}>
                      <img src={rating} />
                      <p className={"text-primary ml-3 mb-0"}>12 reviews</p>
                    </div>
                    <p>
                      {item.description}
                    </p>
                    <div className={"d-flex"}>
                      <div
                        className={
                          "d-flex flex-column mr-5 justify-content-between"
                        }
                      >
                        <h6 className={"fw-bold text-muted text-uppercase"}>
                          Quantity
                        </h6>
                        <div className={"d-flex align-items-center"}>
                          <Button
                            className={`bg-transparent border-0 p-1 fw-bold mr-3 ${s.quantityBtn}`}
                            onClick={() => {
                              if (quantity === 1) return;
                              setQuantity((prevState) => prevState - 1);
                            }}
                          >
                            -
                          </Button>
                          <p className={"fw-bold mb-0"}>{quantity}</p>
                          <Button
                            className={`bg-transparent border-0 p-1 fw-bold ml-3 ${s.quantityBtn}`}
                            onClick={() => {
                              if (quantity < 1) return;
                              setQuantity((prevState) => prevState + 1);
                            }}
                          >
                            +
                          </Button>
                        </div>
                      </div>
                      <div
                        className={"d-flex flex-column justify-content-between"}
                      >
                        <h6 className={"fw-bold text-muted text-uppercase"}>
                          Price
                        </h6>
                        <h6 className={"fw-bold"}>{item.price} $</h6>
                      </div>
                    </div>
                    <div className={"d-flex mt-5"}>
                      <Button
                        color={"primary"}
                        className={"flex-fill mr-4 text-uppercase fw-bold"}
                        style={{ width: "50%" }}
                        onClick={() => {
                          toast.info(
                            "products successfully added to your cart"
                          );
                          addToCart();
                        }}
                      >
                        Add to Cart
                      </Button>
                      <Link
                        href={"/billing"}
                        //@ts-ignore
                        className={"d-inline-block flex-fill"}
                      >
                        <Button
                          color={"primary"}
                          className={"text-uppercase fw-bold"}
                          style={{ width: "50%" }}
                        >
                          Buy now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Modal>

              <div style={{ position: "relative" }}>
                <Link href={`/products/${item.id}`}>
                  <a>
                    <div
                      style={{
                        background: `url(${item.image[0].publicUrl}) no-repeat center`,
                        backgroundSize: "contain",
                        transition: "all .65s ease",
                      }}
                      className={s.productImage}
                    />
                  </a>
                </Link>
                <div
                  className={`d-flex flex-column justify-content-center ${s.product__actions}`}
                  style={{
                    position: "absolute",
                    height: "100%",
                    top: 0,
                    right: 15,
                  }}
                >
                  <Button
                    className={"p-0 bg-transparent border-0"}
                    onClick={() => {
                      addToWishlist(item.id);
                      toast.info(
                        "products successfully added to your wishlist"
                      );
                    }}
                  >
                    <div className={`mb-4 ${s.product__actions__heart}`} />
                  </Button>
                  <Button
                    className={"p-0 bg-transparent border-0"}
                    onClick={() => {
                      //@ts-ignore
                      dispatch({ type: `open${index}` });
                    }}
                  >
                    <div className={`mb-4 ${s.product__actions__max}`} />
                  </Button>
                  <Button
                    className={"p-0 bg-transparent border-0"}
                    onClick={() => {
                      addToCart(item.id);
                      toast.info("products successfully added to your cart");
                    }}
                  >
                    <div className={`mb-4 ${s.product__actions__cart}`} />
                  </Button>
                </div>
              </div>

              <div className={s.productInfo}>
                <div>
                  <Link href={`/category/${item.categories[0].id}`}>
                    <a className={"mt-3 text-muted mb-0 d-inline-block"}>
                      {item.categories[0].title[0].toUpperCase() +
                        item.categories[0].title.slice(1)}
                    </a>
                  </Link>
                  <Link href={`/products/${item.id}`}>
                    <a>
                      <h6
                        className={"fw-bold font-size-base mt-1"}
                        style={{ fontSize: 16 }}
                      >
                        {item.title}
                      </h6>
                    </a>
                  </Link>
                  <h6 style={{ fontSize: 16 }}>${item.price}</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className={"d-flex justify-content-center"}>
          <Link href={"/shop"}>
            <Button
              color="primary"
              className={"text-uppercase mx-auto mt-5 fw-bold"}
            >
              view more
            </Button>
          </Link>
        </Row>
      </Container>
      <Container style={{ marginTop: 80, marginBottom: 80 }}>
        <h3 className={"text-center fw-bold mb-4"}>From Our Blogs</h3>
        <Row className={"justify-content-center mb-2"}>
          <Col sm={8}>
            <p className={"text-center text-muted mb-4"}>
              Create your own story! Here are the latest trends, tips,
              and design tricks to help you out.
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={4}
            className={"mb-4 d-flex flex-column align-items-center"}
          >
            <div className={s.imgAnimation}>
              <Link href="/blog/article/07aeff53-31e5-4276-8307-f855b22b6436">
                <img src={article1} className={"img-fluid"} />
              </Link>
            </div>
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
            <div className={s.imgAnimation}>
              <Link href="/blog/article/c4245ff9-6a53-4b13-8539-0b69b442cfd1">
                <img src={article2} className={"img-fluid"} />
              </Link>
            </div>
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
            <div className={s.imgAnimation}>
              <Link href="/blog/article/57fbad3f-528a-43b2-83e8-32ba30708194">
                <img src={article3} className={"img-fluid"} />
              </Link>
            </div>
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
        <Row className={"d-flex justify-content-center"}>
          <Link href={"/blog"}>
            <Button
              color="primary"
              className={"text-uppercase mx-auto mt-5 fw-bold"}
            >
              view more
            </Button>
          </Link>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get("/products");
  const products = res.data.rows;

  return {
    props: { products }, // will be passed to the page component as props
  };
}

export default Index;
