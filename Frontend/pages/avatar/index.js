import React from "react";
import { Container, Row, Col } from "reactstrap";
import s from "./Avatar.module.scss";
import Head from "next/head";
import Avatar from "components/Avatar/Avatar";
import {
  Tabs,
  Tab,
  Button,
  Image,
  Badge,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import Closet from "../../components/Avatar/Closet";
import Offer from "../../components/Avatar/Offer";
import useAvatar, { unlockable } from "../../components/Avatar/useAvatar";
import { ToastContainer, toast } from "react-toastify";

const closet = (name, price) => ({
  name,
  price,
  unlockables: Array(6)
    .fill(null)
    .map((_, index) => index + 1)
    .map((id) => unlockable(id, name, price, name === "dresses" && id === 1)),
});

const unlock = (unlockable) => ({
  ...unlockable,
  unlocked: true,
});

const unlockunlockableByID = (unlockables, id) =>
  unlockables.map((unlockable) => (unlockable.id === id ? unlock(unlockable) : unlockable));

const unlockunlockableByOffer = (closets, offer) =>
  closets.map((closet) =>
    closet.name === offer.closet
      ? { ...closet, unlockables: unlockunlockableByID(closet.unlockables, offer.id) }
      : closet
  );

const Index = () => {
  const avatar = useAvatar();
  const [offer, setOffer] = React.useState(null);
  const [closets, setClosets] = React.useState([
    closet("accessoires", 300),
    closet("tops", 500),
    closet("bottoms", 500),
    closet("dresses", 700),
    closet("shoes", 700),
  ]);
  const [carrots, setCarrots] = React.useState(3000);
  const target = React.useRef(null);

  return (
    <>
      <Head>
        <title>Ava The Mouse</title>
      </Head>
      <ToastContainer />
      <Container className={s.container} style={{ marginTop: "50px" }}>
        <Row>
          <Col xs="4" className="pt-5">
            <Avatar outfit={avatar.outfit} size="big"/>
          </Col>
          <Col xs="8">
            <Row className={s.clothes}>
              <Tabs defaultActiveKey="accessoires" variant="pills">
                {closets.map((closet) => (
                  <Tab
                    key={JSON.stringify(closet)}
                    eventKey={closet.name}
                    title={
                      closet.name[0].toUpperCase() + closet.name.substring(1)
                    }
                  >
                    <Closet
                      outfit={avatar.outfit}
                      unlockables={closet.unlockables}
                      onBuy={setOffer}
                      onWear={avatar.onWear}
                      onUndress={avatar.onUndress}
                    />
                  </Tab>
                ))}
              </Tabs>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="4">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="button-tooltip-2">To unlock more Carrot Coins you can buy clothes in the store</Tooltip>
              }
            >
              {({ ref, ...triggerHandler }) => (
                <Button
                  ref={ref}
                  variant="outline-secondary"
                  style={{ width: "100%", height: 48, padding: "5px" }}
                  {...triggerHandler}
                >
                  <Image
                    src={`avatar/carrotcoins.png`}
                    style={{ height: 24, margin: "5px" }}
                  />
                  <Badge>{carrots}</Badge>
                </Button>
              )}
            </OverlayTrigger>
          </Col>
          <Col xs="8">
            <Button
              variant="primary"
              style={{ height: 48 }}
              onClick={() => {
                avatar.onSave();
                toast.info("Outfit is saved!");
              }}
              disabled={
                !Object.values(avatar.outfit).every(
                  (unlockable) => !unlockable || unlockable.unlocked
                )
              }
              ref={target}
            >
              Save
            </Button>
          </Col>
        </Row>
      </Container>
      <Offer
        value={offer}
        onHide={() => setOffer(null)}
        onConfirm={() => {
          if(offer.price <= carrots) {
          setClosets(unlockunlockableByOffer(closets, offer));
          setCarrots(carrots - offer.price);
          setOffer(null);
          }
          else {toast.info("You don't have enough Carrot Coins");}
        }}
        onReject={() => setOffer(null)}
      />
    </>
  );
};

export default Index;
