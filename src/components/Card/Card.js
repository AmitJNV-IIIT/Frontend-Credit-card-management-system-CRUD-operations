import React, { useEffect, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./Card.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import clickSound from "../../click-button.mp3";

const Card = ({selectedCard}) => {
  const [flip, setFlip] = useState(false);
  const [data, setData] = useState({});
  const [nickName, setNickName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const playClickSound = () => {
    const audio = new Audio(clickSound);
    audio.play();
  };

  useEffect(() => {
    // const data = localStorage.getItem("cardData");
    // console.log("inside viewCard: ", data);
    // setData(data);
    // console.log("cards data",data)
    setCardNumber(localStorage.getItem("cardNumber"))
    setNickName(localStorage.getItem("selectedCardNickName"))
    setIssueDate(localStorage.getItem("issueDate"))
    setExpiryDate(localStorage.getItem("expiryDate"))
    setCvv(localStorage.getItem("cvv"))
  },[]);

  const handleCardFlip = () => {
    playClickSound();
    setFlip(!flip);
  };
  return (
    <div className="ccwhole">
      <div onClick={() => handleCardFlip()}>
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
          <div className="cardbgfront">
            <div className="bankname">Gotham National Bank</div>
            <div className="cardno">{selectedCard.cardNumber}</div>
            <div className="dates">
              <div className="issuedate">
                <div className="issuelabel">Issue Date</div>
                <div>{selectedCard.issueDate}</div>
              </div>
              <div className="expirydate">
                <div className="expirylabel">Expiry Date</div>
                <div>{selectedCard.expiryDate}</div>
              </div>
            </div>
            <div className="holdername">{selectedCard.cardNickname}</div>
          </div>
          <div className="cardbgback">
            <div className="cvv">{selectedCard.cvv}</div>
          </div>
        </ReactCardFlip>
      </div>
      <div>
        {/* <AddCircleOutlineIcon /> */}
      </div>
    </div>
  );
};

export default Card;
