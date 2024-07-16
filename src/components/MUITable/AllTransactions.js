import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";

const Container = styled(TableContainer)({
  maxHeight: 400,
  background: "rgba(0, 0, 0, 0.5)",
  borderRadius: "10px",
  backdropFilter: "blur(10px)",
});

const StyledTable = styled(Table)({
  minWidth: 450,
  marginRight: "10px",
});

const GreenTableCell = styled(TableCell)({
  color: "green",
  background: "transparent",
});

function AllTransactions(props) {
  const [transactions, setTransactions] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState("");
  const [selectedCardNickName, setSelectedCardNickName] = useState("");
  let [flag, setFlag] = useState(false);

  useEffect(() => {
    setSelectedCardId(localStorage.getItem("selectedCardId"));
    setSelectedCardNickName(localStorage.getItem("selectedCardNickName"));     
    if(!flag){
      toast.success("Transactions have been loaded");
      flag=true;
    }
  }, []);
  useEffect(()=>{
    getAllTransactionsFromServer();
  },[]);

  const getAllTransactionsFromServer = ()=>{
    axios.get(`http://localhost:8082/api/v1/cards/${props.selectedCard.cardId}`).then(
        (response)=>{
            console.log(response);
            setTransactions(response.data.transactions);
        },
        (error)=>{
            console.log(error)
            // toast.error("Something went wrong");
        }
    )
  }

  return (
    <Container component={Paper}>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            <GreenTableCell>Transaction Date Time</GreenTableCell>
            <GreenTableCell>Amount</GreenTableCell>
            <GreenTableCell>Transaction Type</GreenTableCell>
            <GreenTableCell>Notes</GreenTableCell>
            <GreenTableCell>Product Category</GreenTableCell>
            <GreenTableCell>Is Fraudulent</GreenTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index}>
              <GreenTableCell>{transaction.transactionDate}</GreenTableCell>
              <GreenTableCell>{transaction.amount}</GreenTableCell>
              <GreenTableCell>{transaction.transactionType}</GreenTableCell>
              <GreenTableCell>{transaction.notes}</GreenTableCell>
              <GreenTableCell>{transaction.productCategory}</GreenTableCell>
              <GreenTableCell>{transaction.fraudulent ? "Yes" : "No"}</GreenTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Container>
  );
}

export default AllTransactions;
