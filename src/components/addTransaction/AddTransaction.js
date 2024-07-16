import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AddTransaction.css";
import axios from "axios";
import { toast } from "react-toastify";

function AddTransaction(props) {
  const navigate = useNavigate();
  const [selectedCardId, setSelectedCardId] = useState("");
  const [selectedCardNickName, setSelectedCardNickName] = useState("");
  const [userId, setUserId] = useState("");
  const [transaction, setTransaction] = useState({
    transactionId: "",
    cardId: selectedCardId,
    transactionDate: "",
    amount: "",
    transactionType: "",
    notes: "",
    productCategory: "",
    isFraudulent: false,
    merchant_id: "",
    userId: "",
  });

  useEffect(() => {
    setSelectedCardId(localStorage.getItem("selectedCardId"));
    setSelectedCardNickName(localStorage.getItem("selectedCardNickName"));
    setUserId(JSON.parse(localStorage.getItem("userData")).userId);
    console.log(userId);
  }, []);

  function changeHandler(e) {
    e.preventDefault();
    setTransaction({
      ...transaction,
      [e.target.id]: e.target.value,
      userId: userId,
      cardId: selectedCardId,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.addTransaction(transaction);
    // setTransaction({
    //   transactionDate: "",
    //   amount: "",
    //   transactionType: "",
    //   notes: "",
    //   productCategory: "",
    //   isFraudulent: false,
    // })
    postTransactionToServer(transaction);
    console.log(transaction);
  }

  const postTransactionToServer = (data) => {
    axios.post(`http://localhost:8083/api/v1/transactions`, data).then(
      (response) => {
        console.log(response);
        toast.success("Transaction added succesfully");
        setTransaction({
          transactionId: "",
          cardId: selectedCardId,
          transactionDate: "",
          amount: "",
          transactionType: "",
          notes: "",
          productCategory: "",
          isFraudulent: false,
          merchant_id: "",
          userId: userId,
        });
        navigate('/alerts');
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
          <div className="heading">
            <h2>Add a Transaction</h2>
          </div>
          <div className="input-box">
            <input
              type="datetime-local"
              placeholder="Transaction Date Time"
              id="transactionDate"
              value={transaction.transactionDate}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="number"
              step="0.01"
              placeholder="Amount"
              id="amount"
              value={transaction.amount}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Transaction Type"
              id="transactionType"
              value={transaction.transactionType}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Notes"
              id="notes"
              value={transaction.notes}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Product Category"
              id="productCategory"
              value={transaction.productCategory}
              onChange={changeHandler}
              required
            />
          </div>
          {/* <div>
            <input
              type="checkbox"
              id="isFraudulent"
              checked={transaction.isFraudulent}
              onChange={(e) => setTransaction({ ...transaction, isFraudulent: e.target.checked })}
            />
            <label htmlFor="isFraudulent">Is isFraudulent</label>
          </div> */}

          <button type="submit">Add Transaction</button>
          <div className="register-link">
            {/* <p>
              <Link to="/">Add Transaction</Link>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTransaction;
