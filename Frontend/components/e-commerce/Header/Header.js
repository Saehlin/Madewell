import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container,
  Button,
} from "reactstrap";
import Link from "next/link";
import s from "./Header.module.scss";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import {
  changeActiveSidebarItem,
  closeSidebar,
  openSidebar,
} from "redux/actions/navigation";
import axios from "axios";
import { Dropdown } from "react-bootstrap";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.switchSidebar = this.switchSidebar.bind(this);

    this.state = {
      heightOne: 0,
      heightTwo: 0,
      heightThree: 0,
      heightFour: 0,
      innerWidth: typeof window !== "undefined" && window.innerWidth,
      count: 0,
    };
  }

  switchSidebar() {
    if (this.props.sidebarOpened) {
      this.props.dispatch(closeSidebar());
      this.props.dispatch(changeActiveSidebarItem(null));
    } else {
      const paths = this.props.router.pathname.split("/");
      paths.pop();
      this.props.dispatch(openSidebar());
      this.props.dispatch(changeActiveSidebarItem(paths.join("/")));
    }
  }

  componentDidMount() {
    typeof window !== "undefined" &&
      window.addEventListener("resize", () => {
        this.setState({ innerWidth: window.innerWidth });
      });
    if (this.props.currentUser) {
      axios
        .get(`/orders?user=${this.props.currentUser.id}&status=in+cart`)
        .then((res) => {
          this.setState({
            count: res.data.count,
          });
        });
      return;
    } else if (localStorage.getItem("products") && !this.props.currentUser) {
      this.setState({
        count: JSON.parse(localStorage.getItem("products")).length,
      });
    }
  }

  toggle = (e) => {
    this.setState({ [e.target.name]: true });
  };

  onMouseEnter = (e) => {
    this.setState({ [e.target.name]: true });
  };

  onMouseLeave = (e) => {
    this.setState({ [e.target.name]: false });
  };

  render() {
    return (
      <Navbar className={s.header}>
        <Container>
          <NavbarBrand>
            <Link href={"/"}>
              <span className={s.logoStyle}>
                <img width="40" height="40" src="/favicon.ico" alt="logo" />
                Madewell
              </span>
            </Link>
          </NavbarBrand>
          {this.state.innerWidth >= 768 && (
            <nav className={s.nav}>
              <ul className={s.nav__menu}>
                <li className={s.nav__menuItem}>
                  <Link href={"/shop"}>
                    <a>Clothes</a>
                  </Link>
                </li>

                <li className={s.nav__menuItem}>
                  <Link href={"/sale"}>
                    <a>Sale</a>
                  </Link>
                </li>

                <li className={s.nav__menuItem}>
                  <Link href={"/blog"}>
                    <a>Blog</a>
                  </Link>
                </li>

                <li className={s.nav__menuItem}>
                  <Link href={"/about"}>
                    <a>About</a>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
          <Nav>
            <NavItem className={"d-flex align-items-center"}>
              {this.state.innerWidth >= 768 && (
                <>
                  <Link href={"/search"}>
                    <Button className={`bg-transparent border-0 p-3`}>
                      {this.props.router.pathname.includes("search") ? (
                        <div className={s.headerSearchIconActive} />
                      ) : (
                        <div className={s.headerSearchIcon} />
                      )}
                    </Button>
                  </Link>
                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className={`bg-transparent border-0 p-3`}
                      bsPrefix="p-0"
                    >
                      {this.props.router.pathname.includes("account") ||
                      this.props.router.pathname.includes("avatar") ? (
                        <div className={s.headerLoginIconActive} />
                      ) : (
                        <div className={s.headerLoginIcon} />
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{width: 150}}>
                      <Dropdown.Item href="/account">Account</Dropdown.Item>
                      <Dropdown.Item href="/avatar">
                        Ava The Mouse
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </>
              )}
              <Link href={"/wishlist"}>
                <a>
                  <Button
                    className={`${s.headerSvgIcon} bg-transparent border-0 p-3`}
                    style={{ marginTop: 0 }}
                  >
                    {this.props.router.pathname.includes("wishlist") ? (
                      <div className={s.headerWishlistIconActive} />
                    ) : (
                      <div className={s.headerWishlistIcon} />
                    )}
                  </Button>
                </a>
              </Link>

              <Link href={"/cart"}>
                <a>
                  {this.state.count ? (
                    <p
                      style={{ fontSize: 9, marginTop: 10, marginLeft: 34 }}
                      className={`mb-0 text-dark fw-bold`}
                    >
                      {this.state.count}
                    </p>
                  ) : null}
                  <Button
                    className={`${s.headerSvgIcon} bg-transparent border-0 p-3`}
                    style={{ marginTop: this.state.count ? -22 : 0 }}
                  >
                    {this.props.router.pathname.includes("cart") ? (
                      <div className={s.headerCartIconActive} />
                    ) : (
                      <div className={s.headerCartIcon} />
                    )}
                  </Button>
                </a>
              </Link>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

Header.propTypes = {};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
    currentUser: store.auth.currentUser,
    navbarType: store.layout.navbarType,
    navbarColor: store.layout.navbarColor,
    products: store.products.list,
  };
}

export default withRouter(connect(mapStateToProps)(Header));
