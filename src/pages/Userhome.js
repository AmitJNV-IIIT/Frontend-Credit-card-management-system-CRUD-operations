import logo from "../logo.svg";
import "../pages/Loginpage.css";
import Userheader from "../components/UserHeader/Userheader";
import Card from "../components/Card/Card";
import Tagline from "../components/Tagline/Tagline";
import TransactionList from "../components/Transactions/TransactionList";
import StickyHeadTable from "../components/MUITable/Stickyheadtable";
import "./Userhome.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { React, useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
import AddCard from "../components/addcard/AddCard";
import AddTransaction from "../components/addTransaction/AddTransaction";
import AllTransactions from "../components/MUITable/AllTransactions";

function Userhome() {
  const [showCardTable, setShowCardTable] = useState(true);
  const [showTransactionTable, setShowTransactionTable] = useState(false);

  const handleCardButtonClick = () => {
    setShowCardTable(true);
    setShowTransactionTable(false);
  };

  const handleTransactionButtonClick = () => {
    setShowCardTable(false);
    setShowTransactionTable(true);
  };
  /***************************************************** */
  const notify = (message) =>
    toast(message, { position: "bottom-right", autoClose: 1500 });

  const [card, setCard] = useState({
    cardNickName: "",
    cardNumber: "",
    creationDate: Date.now(),
    cvv: "",
    expDate: "",
    isDefault: false,
    isEnabled: true,
    issueDate: "",
    userId: "abcd",
    zip: "",
  });
  const [transaction, setTransaction] = useState({
    transactionDateTime: "",
    amount: 0,
    transactionType: "",
    notes: "",
    productCategory: "",
    isFraudulent: false,
  });

  const [selectedCard, setSelectedCard] = useState({
    cardNickName: "",
    cardNumber: "",
    creationDate: Date.now(),
    cvv: "",
    expDate: "",
    isDefault: false,
    isEnabled: true,
    issueDate: "",
    userId: "abcd",
    zip: "",
  });

  function selectCard(selectedCard) {
    setSelectedCard(selectedCard);
  }

  useEffect(() => {
    notify("Welcome to Arkham Finance 🦇");
    const data = localStorage.getItem("userData");
    console.log("inside home: ", JSON.parse(data));
  }, []);
  

  function addCard(addedCard) {
    setCard({
      ...card,
      cardNickName: addedCard.cardNickName,
      cardNumber: addedCard.cardNumber,
      creationDate: Date.now(),
      cvv: addedCard.cvv,
      expDate: addedCard.expDate,
      isDefault: false,
      isEnabled: true,
      issueDate: addedCard.issueDate,
      userId: "abcd",
      zip: addedCard.zip,
    });
  }
  function addTransaction(addedTransaction) {
    setTransaction({
      ...transaction,
      transactionDateTime: addedTransaction.transactionDateTime,
      amount: addedTransaction.amount,
      transactionType: addedTransaction.transactionType,
      notes: addedTransaction.notes,
      productCategory: addedTransaction.productCategory,
      isFraudulent: addedTransaction.isFraudulent,
    });
  }

  

  return (
    <>
      {/* Full-screen video */}
      <video
        autoPlay
        loop
        muted
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <source src="/assets/4.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ToastContainer />
      <Userheader />
      {/* <div><Loginform/></div> */}
      <div className="homepage">
        <div className="left-content">
          <Card selectedCard={selectedCard}/>

          <div className="popups">
            <div className="popup">
              <Popup
                trigger={
                  <div className="addCardButton">
                    <AddCircleOutlineIcon />
                  </div>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <AddCard addCard={addCard} />
                    </div>
                    <div className="closeFormBtn">
                      <button className="closeBtn" onClick={() => close()}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
            <div className="popup">
              <Popup
                trigger={
                  <div className="addCardButton">
                    <PaymentsRoundedIcon />
                  </div>
                }
                modal
                nested
              >
                {(close) => (
                  <div className="modal">
                    <div className="content">
                      <AddTransaction addTransaction={addTransaction} />
                    </div>
                    <div className="closeFormBtn">
                      <button className="closeBtn" onClick={() => close()}>
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            </div>
          </div>

          <Tagline />
        </div>
        <div className="right-content">
          {/* <TransactionList /> */}
          {/* <StickyHeadTable newCard={card} selectCard={selectCard} /> */}
          <div>
          <button onClick={handleCardButtonClick}>
              Show card Table
            </button>
            <button onClick={handleTransactionButtonClick}>
              Show Transaction Table
            </button>
            {showCardTable && <StickyHeadTable selectCard={selectCard} newCard={card}/>}
            {showTransactionTable && <AllTransactions selectedCard={selectedCard} newTransaction={transaction}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userhome;
