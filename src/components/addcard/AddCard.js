import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AddCard.css'
import axios from "axios";
import { toast } from "react-toastify";

function AddCard(props) {
  const [data, setData] = useState({});
  
  const [card, setCard] = useState({
    cardNickname: "",
    cardNumber: "",
    creationDate: Date.now(),
    cvv: "",
    expiryDate: "",
    isDefault: false,
    isEnabled: true,
    issueDate: "",
    userId: "abcd",
    zip: "",
  });

  function changeHandler(e) {
    e.preventDefault();
    setCard({
      ...card,
      [e.target.id]: e.target.value,
      userId:data.userId
    });
  }
  

  function handleSubmit(e){
    e.preventDefault();
    // props.addCard(card);
    // setCard({
    //   cardNickname: "",
    //   cardNumber: "",
    //   creationDate: Date.now(),
    //   cvv: "",
    //   expiryDate: "",
    //   isDefault: false,
    //   isEnabled: true,
    //   issueDate: "",
    //   userId: "abcd",
    //   zip: "",
    // })
    postCardToServer(card);
  }
  useEffect(() => {
    const data = localStorage.getItem("userData");
    console.log("inside Addcard: ", JSON.parse(data));
    setData(JSON.parse(data));
  }, []);
  const postCardToServer = (data) => {
    axios.post(`http://localhost:8082/api/v1/cards`, data).then(
      (response) => {
        console.log(response);
        toast.success("Card added succesfully");
        setCard({
          cardNickname: "",
          cardNumber: "",
          creationDate: Date.now(),
          cvv: "",
          expiryDate: "",
          isDefault: false,
          isEnabled: true,
          issueDate: "",
          userId: "abcd",
          zip: "",
        });
        // navigate('/view-courses');
      },
      (error) => {
        console.log(error);
        toast.error("Error encountered");
      }
    );
  };


  return (
    <div className="form-wrapper">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Add your Card</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Card Nick Name"
              id="cardNickname"
              value={card.cardNickname}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Card Number"
              id="cardNumber"
              value={card.cardNumber}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="CVV"
              id="cvv"
              value={card.cvv}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Expiry Date"
              id="expiryDate"
              value={card.expiryDate}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Issue Date"
              id="issueDate"
              value={card.issueDate}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Zip Code"
              id="zip"
              value={card.zip}
              onChange={changeHandler}
              required
            />
          </div>

          <button type="submit">Add Card</button>
          <div className="register-link">
            {/* <p>
              <Link to="/">Add Card</Link>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCard;
