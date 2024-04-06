import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import "./step-section.css";

const STEP__DATA = [
  {
    title: "Setup your wallet",
    desc: "Setting up your wallet means downloading a secure app, creating an account, and keeping your private keys safe for managing cryptocurrencies.",
    icon: "ri-wallet-line",
  },

  {
    title: "Create your collection",
    desc: "Creating a collection involves gathering items with a shared theme or purpose, whether physical or digital, to display or share with others. ",
    icon: "ri-layout-masonry-line",
  },

  {
    title: "Add your NFTs",
    desc: "Adding your NFTs means uploading your digital assets to a platform where they're tokenized and recorded on a blockchain, proving ownership. ",
    icon: "ri-image-line",
  },

  {
    title: "List them for sale",
    desc: "Listing your NFTs for sale means setting a price and making them available on NFT marketplaces for buyers to purchase, monetizing your digital assets.",
    icon: "ri-list-check",
  },
];

const StepSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP__DATA.map((item, index) => (
            <Col lg="3" md="4" sm="6" key={index} className="mb-4">
              <div className="single__step__item">
                <span>
                  <i class={item.icon}></i>
                </span>
                <div className="step__item__content">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default StepSection;
