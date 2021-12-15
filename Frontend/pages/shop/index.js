import React from "react";
import { Container, Row, Col, Input, Button, Modal } from "reactstrap";
import Checkbox from "react-custom-checkbox";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import s from "./Shop.module.scss";

import Avatar from "components/Avatar/Avatar";
import filter from "public/images/e-commerce/filter.svg";
import relevant from "public/images/e-commerce/relevant.svg";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Head from "next/head";
import arrowRight from "../../public/images/e-commerce/home/arrow-right.svg";
import rating from "../../public/images/e-commerce/details/stars.svg";
import productsListActions from "../../redux/actions/products/productsListActions";
import { Image } from "react-bootstrap";

let categoriesList = [],
  brandsList = [];

const Index = () => {
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
  const [quantity, setQuantity] = React.useState(1);
  const [width, setWidth] = React.useState(1440);
  const [products, setProducts] = React.useState([]);
  const [showFilter, setShowFilter] = React.useState(false);
  const [allProducts, setAllProducts] = React.useState([]);
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
  // @ts-ignore
  const outfit = useSelector((store) => store.avatar.outfit);
  // @ts-ignore
  const visibility = useSelector((state) => state.avatar.visibility);
  // @ts-ignore
  const currentUser = useSelector((store) => store.auth.currentUser);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    axios.get("/products").then((res) => {
      setAllProducts(res.data.rows);
      setProducts([...res.data.rows]);
    });
  }, []);

  const funFacts = [
    "We have a great sale going on for warm winter jackets and boots.",
    "Our newest blog post talks about waste in the clothing industry and how to battle it.",
    "Did you know you can change my clothes with a click on my suitcase?",
    "Madewell is glad to welcome you on our site, hope you enjoy the stay!",
    "Family Rees just joined us in production, we love to see our team grow.",
    "The newest collection focuses on earthy tones with warm accents.",
    "Keep up to date with the latest trends and the best styles.",
    "We never throw away our clothes, we rather donate them to people in need.",
    "My name is Ava and I love fun facts!",
    "If you don't want to see me anymore, you can adjust it in your profile.",
  ];
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  const addToCart = (id) => {
    if (currentUser) {
      axios.post(`/orders/`, {
        data: {
          amount: 1,
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
      amount: 1,
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

  const filterByCategory = (category, brands) => {
    let count = 0,
      brandsCount = 0,
      brandsString = "",
      categoriesString = "";
    if (brands) {
      brandsList.push(category);
      brandsList.forEach((item) => {
        if (item === category) brandsCount += 1;
      });
      brandsList = brandsList.filter((item) => {
        if (brandsList.length === 1) {
          return true;
        }
        if (brandsCount === 1 && item === category) return true;
        return item !== category;
      });
      brandsString = brandsList.join("|");
    } else {
      categoriesList.push(category);
      categoriesList.forEach((item) => {
        if (item === category) count += 1;
      });
      categoriesList = categoriesList.filter((item) => {
        if (categoriesList.length === 1) {
          return true;
        }
        if (count === 1 && item === category) return true;
        return item !== category;
      });
      categoriesString = categoriesList.join("|");
    }
    axios
      .get(`/products?categories=${categoriesString}&brand=${brandsString}`)
      .then((res) => {
        setProducts([...res.data.rows]);
      });
  };

  return (
    <>
      <Head>
        <title>Clothes</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Ecological webshop" />
        <meta charSet="utf-8" />
      </Head>
      <Container className={"mb-5"} style={{ marginTop: 100 }}>
        <Row>
          <ToastContainer />
          <Col
            sm={2}
            className={`${s.filterColumn} ${showFilter ? s.showFilter : ""}`}
          >
            <div className={s.filterTitle} style={{ marginBottom: 15 }}>
              <h5
                className={"fw-bold mb-5 text-uppercase"}
                style={{ marginTop: 12 }}
              >
                Categories
              </h5>
              <span onClick={() => setShowFilter(false)}>✕</span>
            </div>
            <div className={"d-flex align-items-center"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={<p className={"d-inline-block ml-1 mb-0"}>Tops</p>}
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc711")
                }
                style={{ marginTop: -1 }}
              />
            </div>
            <div className={"d-flex align-items-center mt-2"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={<p className={"d-inline-block ml-1 mb-0"}>Jackets</p>}
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc712")
                }
                style={{ marginTop: -1 }}
              />
            </div>
            <div className={"d-flex align-items-center mt-2"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={<p className={"d-inline-block ml-1 mb-0"}>Pants</p>}
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc713")
                }
                style={{ marginTop: -1 }}
              />
            </div>
            <div className={"d-flex align-items-center mt-2"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={<p className={"d-inline-block ml-1 mb-0"}>Skirts</p>}
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc714")
                }
                style={{ marginTop: -1 }}
              />
            </div>
            <div className={"d-flex align-items-center mt-2"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={<p className={"d-inline-block ml-1 mb-0"}>Dresses</p>}
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc715")
                }
                style={{ marginTop: -1 }}
              />
            </div>
            <div className={"d-flex align-items-center mt-2"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={<p className={"d-inline-block ml-1 mb-0"}>Shoes</p>}
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc716")
                }
                style={{ marginTop: -1 }}
              />
            </div>
            <div className={"d-flex align-items-center mt-2"}>
              <Checkbox
                borderColor={"#232323"}
                borderWidth={1}
                borderRadius={2}
                icon={
                  <div
                    style={{
                      backgroundColor: "#bd744c",
                      borderRadius: 2,
                      padding: 4,
                    }}
                  />
                }
                size={16}
                label={
                  <p className={"d-inline-block ml-1 mb-0"}>Accessoires</p>
                }
                onChange={() =>
                  filterByCategory("1fcb7ece-6373-405d-92ef-3f3c4e7dc717")
                }
                style={{ marginTop: -1 }}
              />
            </div>
          </Col>
          <Col sm={8}>
            {!(width <= 768) ? (
              <div
                className={"d-flex justify-content-between align-items-center"}
                style={{ marginBottom: 20 }}
              >
                <h6>
                  Showing{" "}
                  <span className={"fw-bold text-primary"}>
                    {products.length}
                  </span>{" "}
                  of <span className={"fw-bold text-primary"}>9</span> Products
                </h6>
                <div className={"d-flex align-items-center"}>
                  <h6 className={"text-nowrap mr-3 mb-0"}>Sort by:</h6>
                  <Input type={"select"} style={{ height: 50, width: 180 }}>
                    <option>Most Popular</option>
                    <option>Newest</option>
                    <option>Price: low to high</option>
                    <option>Price: high to low</option>
                  </Input>
                </div>
              </div>
            ) : (
              <>
                <div className={"d-flex justify-content-between"}>
                  <Button
                    className={"text-dark bg-transparent border-0"}
                    style={{ padding: "14px 0 22px 0" }}
                    onClick={() => setShowFilter(true)}
                  >
                    <img src={filter} /> Filters
                  </Button>
                  <Button
                    className={"text-dark bg-transparent border-0"}
                    style={{ padding: "14px 0 22px 0" }}
                  >
                    <img src={relevant} /> Relevant
                  </Button>
                </div>
                <hr style={{ marginTop: 0, marginBottom: "2rem" }} />
              </>
            )}
            <Row>
              {products.map((item, index) => (
                <Col
                  md={6}
                  lg={4}
                  xs={12}
                  className={`mb-4 ${s.product}`}
                  key={index}
                >
                  <Modal
                    isOpen={openState[`open${index}`]}
                    // @ts-ignore
                    toggle={() => dispatch({ type: `open${index}` })}
                  >
                    <div className={s.modalWindow}>
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
                        <p>{item.description}</p>
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
                            className={
                              "d-flex flex-column justify-content-between"
                            }
                          >
                            <h6 className={"fw-bold text-muted text-uppercase"}>
                              Price
                            </h6>
                            <h6 className={"fw-bold"}>{item.price} $</h6>
                          </div>
                        </div>
                        <div className={"d-flex mt-5"}>
                          <Button
                            outline
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
                            // @ts-ignore
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
                            backgroundImage: `url(${item.image[0].publicUrl})`,
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
                          // @ts-ignore
                          dispatch({ type: `open${index}` });
                        }}
                      >
                        <div className={`mb-4 ${s.product__actions__max}`} />
                      </Button>
                      <Button
                        className={"p-0 bg-transparent border-0"}
                        onClick={() => {
                          addToCart(item.id);
                          toast.info(
                            "products successfully added to your cart"
                          );
                        }}
                      >
                        <div className={`mb-4 ${s.product__actions__cart}`} />
                      </Button>
                    </div>
                  </div>
                  <div className={s.productInfo}>
                    <div>
                      <Link href={`/category/${item.categories[0].id}`}>
                        <a className={"mt-3 text-muted mb-0  d-inline-block"}>
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
                      <h6 style={{ fontSize: 16 }}>{item.price} $</h6>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={2} style={{ marginTop: 100 }}>
            {visibility && (
              <div>
                <div style={{ position: "relative" }}>
                  <Image
                    src={`../avatar/speachbubble.png`}
                    style={{ height: 200, paddingLeft: 0 }}
                  />
                  <div className={s.speachbubble}>
                    <p>{funFact}</p>
                  </div>
                </div>
                <Avatar outfit={outfit} size="small" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
      ´
    </>
  );
};

export default Index;
