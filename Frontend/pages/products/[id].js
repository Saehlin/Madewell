import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  Input,
} from "reactstrap";
import feedbackFields from "components/admin/CRUD/Feedback/feedbackFields";
import { Formik } from "formik";
import IniValues from "components/admin/FormItems/iniValues";
import PreparedValues from "components/admin/FormItems/preparedValues";
import FormValidations from "components/admin/FormItems/formValidations";
import ImagesFormItem from "components/admin/FormItems/items/ImagesFormItem";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import productRight from "public/images/e-commerce/details/1-right.png";
import productCenter from "public/images/e-commerce/details/1-center.png";
import productLeft from "public/images/e-commerce/details/1-left.png";
import person2 from "public/images/e-commerce/details/person2.jpg";
import product1 from "public/images/e-commerce/home/product1.png";
import product2 from "public/images/e-commerce/home/product2.png";
import product3 from "public/images/e-commerce/home/product3.png";
import product4 from "public/images/e-commerce/home/product4.png";
import product5 from "public/images/e-commerce/home/product5.png";
import product6 from "public/images/e-commerce/home/product6.png";
import product7 from "public/images/e-commerce/home/product7.png";
import product8 from "public/images/e-commerce/home/product8.png";
import s from "./Product.module.scss";

import Avatar from "components/Avatar/Avatar";
import closeIcon from "public/images/e-commerce/details/close.svg";
import preloaderImg from "public/images/e-commerce/preloader.gif";
import axios from "axios";
import close from "public/images/e-commerce/close.svg";
import chevronRightIcon from "public/images/e-commerce/details/chevron-right.svg";
import chevronLeftIcon from "public/images/e-commerce/details/chevron-left.svg";
import actions from "redux/actions/products/productsFormActions";
import Head from "next/head";
import feedbackActions from "redux/actions/feedback/feedbackListActions";
import feedbackActionsForm from "redux/actions/feedback/feedbackFormActions";
import productsListActions from "redux/actions/products/productsListActions";
import ReactImageMagnify from "react-image-magnify";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Badge, Image, OverlayTrigger, Tooltip } from "react-bootstrap";

const Star = ({ selected = false, onClick = (f) => f }) => (
  <div
    className={selected ? `${s.star} ${s.selected}` : `${s.star}`}
    onClick={onClick}
  ></div>
);

const products = [
  {
    id: 0,
    category: "Dresses",
    title: "Puffsleeves Dress",
    price: "99.99",
    img: product1,
  },
  {
    id: 1,
    category: "Dresses",
    title: "Sporty Two-Piece",
    price: "149.99",
    img: product2,
  },
  {
    id: 2,
    category: "Skirts",
    title: "Grey Skirt",
    price: "89.99",
    img: product3,
  },
  {
    id: 3,
    category: "Jackets",
    title: "Black Jacket",
    price: "104.99",
    img: product4,
  },
  {
    id: 3,
    category: "Tops",
    title: "Orange Crop Top",
    price: "59.99",
    img: product5,
  },
  {
    id: 4,
    category: "Dresses",
    title: "White Dress",
    price: "114.99",
    img: product6,
  },
  {
    id: 5,
    category: "Jackets",
    title: "Red Suit Jacket",
    price: "94.99",
    img: product7,
  },
  {
    id: 6,
    category: "Accessoires",
    title: "Silver Jewelry Set",
    price: "89.99",
    img: product8,
  },
];

const Id = ({ product: serverSideProduct, currentProductId }) => {
  // @ts-ignore
  const outfit = useSelector((store) => store.avatar.outfit);
  // @ts-ignore
  const visibility = useSelector((state) => state.avatar.visibility);

  const [isOpen, setOpen] = React.useState(false);
  const [width, setWidth] = React.useState(1440);
  // @ts-ignore
  const currentUser = useSelector((state) => state.auth.currentUser);
  // @ts-ignore
  const feedbackList = useSelector((state) => state.feedback.list.rows);
  const [starsSelected, setStarsSelected] = React.useState(0);
  const [firstname, setFirstName] = React.useState("");
  const [lastname, setLastName] = React.useState("");
  const [review, setReview] = React.useState("");
  const dispatch = useDispatch();
  const [product, setProduct] = React.useState(serverSideProduct);
  const [quantity, setQuantity] = React.useState(1);
  const [fetching, setFetching] = React.useState(true);
  const router = useRouter();
  const { id } = router.query;

  React.useEffect(() => {
    dispatch(feedbackActions.doFetch({}));
    typeof window !== "undefined" &&
      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    typeof window !== "undefined" &&
      window.setTimeout(() => {
        setFetching(false);
      }, 1000);
  }, []);

  const funFacts = [
    "This garment was made locally by continentalclothing in Germany!",
    "It is made of 100% organic cotton, which means less water is wasted during production.",
    "Kalena and Ivona designed with passion the perfect cut for this product!",
    "During production, 20 plastic bottles could be recycled instead of being thrown away.",
    "There were no pesticides used while producing - something that is normally very common.",
    "No animals or humans were harmed for this beautiful clothing piece.",
    "The sustainable fibers saved 20% of CO2 emissions normally produced.",
  ];
  const funFact = funFacts[Math.floor(Math.random() * funFacts.length)];

  const sizes = ["XS", "S", "M", "L", "XL"];
  const listSizes = sizes.map((size) => (
    <Button
      color={"light"}
      size={5}
      style={{ margin: 5, marginTop: 15, padding: 10 }}
      onClick={null}
    >
      {size}
    </Button>
  ));

  const addToCart = () => {
    dispatch(actions.doFind(id));
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
    dispatch(productsListActions.doAdd(localProducts));
  };

  const iniValues = () => {
    return IniValues(feedbackFields, {});
  };

  const formValidations = () => {
    return FormValidations(feedbackFields, {});
  };

  const handleSubmit = (values) => {
    const { id, ...data } = PreparedValues(feedbackFields, values || {});
    const finalData = {
      ...data,
      ...{
        avatar: "",
        feedback_date: new Date(),
        firstname,
        lastname,
        status: "hidden",
        rating: starsSelected,
        review,
        product: currentProductId,
      },
    };
    setOpen(false);
    dispatch(feedbackActionsForm.doCreate(finalData));
  };

  return (
    <>
      <Head>
        <title>{product.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`${product.meta_description || "An ecological webshop"}`}
        />
      </Head>
      <ToastContainer />
      <Container style={{ marginTop: 120 }}>
        {fetching ? (
          <div
            style={{ height: 480, paddingLeft: 0, paddingRight: 0 }}
            className={"d-flex justify-content-center align-items-center"}
          >
            <img src={preloaderImg} alt={"fetching"} />
          </div>
        ) : (
          <Row
            className={"mb-5"}
            style={{ marginTop: 32, paddingLeft: 0, paddingRight: 0 }}
          >
            <Col sm={3} style={{ height: 500 }}>
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
            <Col sm={5} className={"d-flex"} style={{ height: 500 }}>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: product.image[0].publicUrl,
                  },
                  largeImage: {
                    src: product.image[0].publicUrl,
                    width: 1200,
                    height: 1200,
                  },
                }}
                className={`${product.image.length && "mr-3"}`}
                enlargedImagePosition={"over"}
              />
              {product.image.length > 1 ? (
                <div
                  className={`d-flex flex-column h-100 justify-content-between ${s.dMdNone}`}
                  style={{ width: 160 }}
                >
                  <img src={productRight} width={160} />
                  <img src={productCenter} width={160} />
                  <img src={productLeft} width={160} />
                </div>
              ) : null}
            </Col>
            <Col
              sm={4}
              className={"d-flex flex-column justify-content-between"}
              style={{ paddingLeft: 30, paddingRight: 0, height: 500 }}
            >
              <div
                className={"d-flex flex-column justify-content-between"}
                style={{ height: 310 }}
              >
                <h4 className={"fw-bold"}>{product.title}</h4>
                <div
                  className={"d-flex align-items-center"}
                  style={{ marginBottom: 10 }}
                >
                  {[1, 2, 3, 4, 5].map((n, i) => (
                    <Star
                      key={i}
                      selected={i < product.rating}
                      onClick={null}
                    />
                  ))}
                  <p className={"text-primary ml-3 mb-0"}>
                    {feedbackList.length} reviews
                  </p>
                </div>
                <div>
                  <p style={{ height: 100 }}>{product.description}</p>
                </div>
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
                          setProduct((prevState) => ({
                            ...prevState,
                            price:
                              Number(prevState.price) -
                              Number(serverSideProduct.price),
                          }));
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
                          setProduct((prevState) => ({
                            ...prevState,
                            price:
                              Number(prevState.price) +
                              Number(serverSideProduct.price),
                          }));
                        }}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                  <div className={"d-flex flex-column justify-content-between"}>
                    <h6 className={"fw-bold text-muted text-uppercase"}>
                      Price
                    </h6>
                    <h6 className={"fw-bold"}>
                      {Math.round(product.price * 100) / 100} $
                    </h6>
                  </div>
                </div>
                <div>{listSizes}</div>
                <div
                  style={{ marginTop: 50, paddingBottom: 0, marginBottom: 0 }}
                >
                  <OverlayTrigger
                    placement="top"
                    overlay={
                      <Tooltip id="tooltip-disabled">
                        You can use Carrot Coins to get Unlockables for the
                        Mouse
                      </Tooltip>
                    }
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        color={"link"}
                        ref={ref}
                        style={{
                          width: "100%",
                          height: 48,
                          padding: "5px",
                          color: "black",
                        }}
                        href="/avatar"
                        {...triggerHandler}
                      >
                        <Badge>
                          You will get
                          <Image
                            src={`../avatar/carrotcoins.png`}
                            style={{ height: 18, margin: "5px" }}
                          />
                          {Math.round(product.price)} for this purchase
                        </Badge>
                      </Button>
                    )}
                  </OverlayTrigger>
                </div>
                <div
                  className={`${s.buttonsWrapper} d-flex`}
                  style={{ marginTop: 10 }}
                >
                  <Button
                    outline
                    color={"primary"}
                    className={"flex-fill mr-4 text-uppercase fw-bold"}
                    style={{ width: "50%" }}
                    onClick={() => {
                      toast.info("products successfully added to your cart");
                      addToCart();
                    }}
                  >
                    Add to Cart
                  </Button>
                  <Link href={"/billing"}>
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
            </Col>
          </Row>
        )}
        <hr />
        <Row className={"mt-5 mb-5"}>
          <Modal
            isOpen={isOpen}
            toggle={() => setOpen((prevState) => !prevState)}
            style={{ width: 920 }}
          >
            <div className={"p-5"}>
              <div style={{ position: "absolute", top: 0, right: 0 }}>
                <Button
                  className={"border-0 bg-transparent"}
                  style={{ padding: "15px 15px" }}
                  onClick={() => setOpen((prevState) => !prevState)}
                >
                  <img src={closeIcon} />
                </Button>
              </div>
              <ModalBody>
                <h3 className={"fw-bold mb-5"}>Leave Your Feedback</h3>
                <div
                  className={` ${s.modalProduct} d-flex justify-content-between align-items-center`}
                >
                  <div className={"d-flex align-items-center"}>
                    <img
                      src={product.image[0].publicUrl}
                      width={100}
                      className={"mr-4"}
                    />
                    <div>
                      <h6 className={"text-muted"}>
                        {product.categories[0].title[0].toUpperCase() +
                          product.categories[0].title.slice(1)}
                      </h6>
                      <h5 className={"fw-bold"}>{product.title}</h5>
                    </div>
                  </div>
                  <div className={"d-flex align-items-center"}>
                    <Button
                      className={`bg-transparent border-0 p-1 fw-bold mr-3 ${s.quantityBtn}`}
                      onClick={() => {
                        if (quantity === 1) return;
                        setQuantity((prevState) => prevState - 1);
                        setProduct((prevState) => ({
                          ...prevState,
                          price:
                            Number(prevState.price) -
                            Number(serverSideProduct.price),
                        }));
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
                        setProduct((prevState) => ({
                          ...prevState,
                          price:
                            Number(prevState.price) +
                            Number(serverSideProduct.price),
                        }));
                      }}
                    >
                      +
                    </Button>
                  </div>
                  <h6 className={"fw-bold mb-0"}>
                    {Math.round(product.price * 100) / 100} $
                  </h6>
                  <Button
                    className={"bg-transparent border-0 p-0"}
                    onClick={() => {}}
                  >
                    <img src={close} alt={"close"} />
                  </Button>
                </div>
                <div className={"d-flex align-items-center my-4"}>
                  <h6 className={"fw-bold mr-4 mb-0"}>Rate Product</h6>
                  <div className={s.starRating}>
                    {[1, 2, 3, 4, 5].map((n, i) => (
                      <Star
                        key={i}
                        selected={i < starsSelected}
                        onClick={() => setStarsSelected(i + 1)}
                      />
                    ))}
                  </div>
                </div>
                <div className={"d-flex mb-4"}>
                  <Input
                    type="text"
                    name="text"
                    onChange={(e) => setFirstName(e.target.value)}
                    id="exampleEmail"
                    className="w-100 mr-4"
                    placeholder={"First Name"}
                  />
                  <Input
                    type="text"
                    name="text"
                    onChange={(e) => setLastName(e.target.value)}
                    id="exampleEmail"
                    className="w-100"
                    placeholder={"Last Name"}
                  />
                </div>

                <Input
                  type="textarea"
                  name="text"
                  onChange={(e) => setReview(e.target.value)}
                  id="exampleEmail"
                  className="w-100"
                  style={{ height: 155 }}
                  placeholder={"Add your comment"}
                />

                <Formik
                  onSubmit={handleSubmit}
                  initialValues={iniValues()}
                  validationSchema={formValidations()}
                  render={(form) => {
                    return (
                      <form onSubmit={form.handleSubmit}>
                        <ImagesFormItem
                          name={"image"}
                          schema={feedbackFields}
                          path={"feedbacks/image"}
                          fileProps={{
                            size: undefined,
                            formats: undefined,
                          }}
                          max={undefined}
                        />

                        <OverlayTrigger
                          placement="top"
                          overlay={
                            <Tooltip id="tooltip-disabled">
                              You can use Carrot Coins to get Unlockables for
                              the Mouse
                            </Tooltip>
                          }
                        >
                          {({ ref, ...triggerHandler }) => (
                            <Button
                              color={"link"}
                              ref={ref}
                              style={{
                                width: "100%",
                                height: 48,
                                margin: 0,
                                color: "black",
                              }}
                              href="/avatar"
                              {...triggerHandler}
                            >
                              <Badge>
                                You will get
                                <Image
                                  src={`../avatar/carrotcoins.png`}
                                  style={{ height: 18, margin: "5px" }}
                                />
                                20 for leaving feedback!
                              </Badge>
                            </Button>
                          )}
                        </OverlayTrigger>

                        <div className={"d-flex justify-content-center"}>
                          <Button
                            color={"primary fw-bold text-uppercase"}
                            style={{ marginTop: 10 }}
                            onClick={() => form.handleSubmit()}
                          >
                            LEAVE FEEDBACK
                          </Button>
                        </div>
                      </form>
                    );
                  }}
                />
              </ModalBody>
            </div>
          </Modal>
          <Col sm={12} className={"d-flex justify-content-between"}>
            <h4 className={"fw-bold"}>Reviews:</h4>
            <Button
              className={`bg-transparent border-0 fw-bold text-primary p-0 ${s.leaveFeedbackBtn}`}
              onClick={() => setOpen(true)}
            >
              + Leave Feedback
            </Button>
          </Col>
          {feedbackList &&
            feedbackList.map((item, idx) => {
              if (item.status === "visible") {
                return (
                  <Col sm={12} className={"d-flex mt-5"}>
                    <img
                      src={item.image[0].publicUrl || person2}
                      style={{ borderRadius: 65 }}
                      className={`mr-5 ${s.reviewImg}`}
                    />
                    <div
                      className={`d-flex flex-column justify-content-between align-items-start`}
                      style={{ width: "100%" }}
                    >
                      <div className={"d-flex justify-content-between w-100"}>
                        <h6 className={"fw-bold mb-0"}>
                          {item.firstname} {item.lastname}
                        </h6>
                        <p
                          className={"text-muted mb-0 justify-content-flex-end"}
                          style={{ textAlign: "right" }}
                        >
                          {(item.feedbackDate &&
                            item.feedbackDate.toString().slice(0, 10)) ||
                            (item.createdAt &&
                              item.createdAt.toString().slice(0, 10))}
                        </p>
                      </div>
                      <div className={s.starRating}>
                        {[1, 2, 3, 4, 5].map((n, i) => (
                          <Star
                            key={i}
                            selected={i < item.rating}
                            onClick={null}
                          />
                        ))}
                      </div>
                      <p className={"mb-0"}>{item.review}</p>
                    </div>
                  </Col>
                );
              }
            })}
        </Row>
        <hr />
        <Row className={"mt-5 mb-5"}>
          <Col sm={12}>
            <h5 className={"fw-bold"}>You may also like:</h5>
          </Col>
        </Row>
        <Row className={"mb-5"} style={{ position: "relative" }}>
          <CarouselProvider
            totalSlides={8}
            visibleSlides={width > 992 ? 4 : width > 576 ? 2 : 1}
            //@ts-ignore
            style={{ width: "100%" }}
            infinite
            dragEnabled
            naturalSlideHeight={400}
            naturalSlideWidth={300}
          >
            <ButtonBack
              style={{
                position: "absolute",
                top: "35%",
                zIndex: 99,
                left: -20,
              }}
              className={"btn bg-transparent border-0 p-0"}
            >
              <img src={chevronLeftIcon} />
            </ButtonBack>
            <Slider>
              {products.map((item, index) => (
                <Slide index={index}>
                  <Col className={`${s.product}`}>
                    <Link
                      href={`/products/afaf98d5-4060-4408-967b-c4f4af3d186${
                        index + 1
                      }`}
                    >
                      <a>
                        <img
                          src={item.img}
                          className={"img-fluid"}
                          style={{ width: "100%" }}
                        />
                      </a>
                    </Link>
                    <p className={"mt-3 text-muted mb-0"}>{item.category}</p>
                    <Link
                      href={`/products/afaf98d5-4060-4408-967b-c4f4af3d1861`}
                    >
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
                  </Col>
                </Slide>
              ))}
            </Slider>
            <ButtonNext
              style={{
                position: "absolute",
                top: "35%",
                zIndex: 99,
                right: -20,
              }}
              className={"btn bg-transparent border-0 p-0"}
            >
              <img src={chevronRightIcon} />
            </ButtonNext>
          </CarouselProvider>
        </Row>
      </Container>
    </>
  );
};

export async function getServerSideProps(context) {
  const res = await axios.get(`/products/${context.query.id}`);
  const product = res.data;

  return {
    props: { product, currentProductId: context.query.id }, // will be passed to the page component as props
  };
}

export default Id;
