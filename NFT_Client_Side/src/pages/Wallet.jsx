import React from "react";
// import { ethers } from "ethers";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import "../styles/wallet.css";

const wallet__data = [
  {
    title: "Bitcoin",
    desc: "Effortlessly link your wallet with Bitcoin for seamless asset management. Enjoy secure transactions and easy access to your digital assets. Join us and experience the future of finance!",
    icon: "ri-bit-coin-line",
  },

  {
    title: "Coinbase",
    desc: "To link your wallet with Coinbase, sign in to your Coinbase account, navigate to the settings, and follow the instructions to connect your preferred wallet type, facilitating convenient access to cryptocurrency trading and storage.",
    icon: "ri-coin-line",
  },

  {
    title: "Metamask",
    desc: "To connect your wallet with MetaMask, install the MetaMask browser extension or mobile app, create or import your wallet, and securely manage your Ethereum-based assets while interacting with decentralized applications.",
    icon: "ri-money-cny-circle-line",
  },

  {
    title: "Authereum",
    desc: "To integrate your wallet with Authereum, access your Authereum account, and proceed to link your preferred wallet type, enabling streamlined interaction with decentralized applications and blockchain functionality.",
    icon: "ri-bit-coin-line",
  },
];

const Wallet = () => {
  // const [errorMessage, setErrorMessage] = useState(null);
  // const [defaultAccount, setDefaultAccount] = useState(null);
  // const [userBalance, setUserBalance] = useState(null);
  // const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  // const connectWalletHandler = () => {
  //   if (window.ethereum && window.ethereum.isMetaMask) {
  //     console.log("MetaMask Here!");

  //     window.ethereum
  //       .request({ method: "eth_requestAccounts" })
  //       .then((result) => {
  //         accountChangedHandler(result[0]);
  //         setConnButtonText("Wallet Connected");
  //         getAccountBalance(result[0]);
  //       })
  //       .catch((error) => {
  //         setErrorMessage(error.message);
  //       });
  //   } else {
  //     console.log("Need to install MetaMask");
  //     setErrorMessage("Please install MetaMask browser extension to interact");
  //   }
  // };

  // // update account, will cause component re-render
  // const accountChangedHandler = (newAccount) => {
  //   setDefaultAccount(newAccount);
  //   getAccountBalance(newAccount.toString());
  // };

  // const getAccountBalance = (account) => {
  //   window.ethereum
  //     .request({ method: "eth_getBalance", params: [account, "latest"] })
  //     .then((balance) => {
  //       setUserBalance(ethers.utils.formatEther(balance));
  //     })
  //     .catch((error) => {
  //       setErrorMessage(error.message);
  //     });
  // };

  // const chainChangedHandler = () => {
  //   // reload the page to avoid any errors with chain change mid use of application
  //   window.location.reload();
  // };

  // // listen for account changes
  // window.ethereum.on("accountsChanged", accountChangedHandler);

  // window.ethereum.on("chainChanged", chainChangedHandler);

  return (
    <>
      <CommonSection title="Connect Wallet" />
      <section>
        {/* <div className="walletCard">
          <h4> {"Connection to MetaMask using window.ethereum methods"} </h4>
          <button onClick={connectWalletHandler}>{connButtonText}</button>
          <div className="accountDisplay">
            <h3>Address: {defaultAccount}</h3>
          </div>
          <div className="balanceDisplay">
            <h3>Balance: {userBalance}</h3>
          </div>
          {errorMessage}
        </div> */}
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  To establish connectivity between your wallet and the desired
                  platform, access your account, proceed to the settings
                  section, and execute the requisite actions to integrate your
                  preferred wallet type seamlessly.
                </p>
              </div>
            </Col>

            {wallet__data.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i class={item.icon}></i>
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
