import React, { useEffect, useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Radio,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import { toast } from "react-toastify";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
const RadioGreen = styled(Radio)({
  color: "green",
  background: "transparent",
});

function Stickyheadtable(props) {
  const [arr, setArr] = useState([]);
  const [userId, setUserId] = useState(null);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [cardData,setCardData] = useState({});
  let [flag, setFlag] = useState(false);
  useEffect(() => {
    setUserId(JSON.parse(localStorage.getItem("userData")).userId);
    console.log(JSON.parse(localStorage.getItem("userData")).userId);
    getAllCardsFromServer(JSON.parse(localStorage.getItem("userData")).userId);
    if(!flag){
      toast.success("Cards have been loaded");
      flag=true;
    }
  }, []);

  const getAllCardsFromServer = (currUser) => {
    axios.get(`http://localhost:8081/api/v1/users/${currUser}`).then(
      (response) => {
        setArr(response.data.cards);
        console.log("arrr", arr);
        // toast.success("Cards have been loaded");
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  const deleteCard = (id) => {
    axios.delete(`http://localhost:8082/api/v1/cards/${id}`).then(
      (response) => {
        updateCards(id);
        toast.success("Card deleted successfully");
      },
      (error) => {
        toast.error("Something went wrong!");
      }
    );
  };

  const updateCards = (id) => {
    setArr(arr.filter((c) => c.id !== id));
  };

  const handleRadioChange = (id,nickName,cardD) => {
    setSelectedCardId(id);
    localStorage.setItem("selectedCardId", id);
    localStorage.setItem("selectedCardNickName", cardD.cardNickname);
    localStorage.setItem("cardNumber", cardD.cardNumber);
    localStorage.setItem("issueDate", cardD.issueDate);
    localStorage.setItem("expiryDate", cardD.expiryDate);
    localStorage.setItem("cvv", cardD.cvv);
    setCardData({
      ...cardData,
      cardD
    })
    localStorage.setItem("cardData",cardData);
    props.selectCard(cardD);
  };

  return (
    <Container component={Paper}>
      <StyledTable stickyHeader>
        <TableHead>
          <TableRow>
            <GreenTableCell>Select Card</GreenTableCell>
            <GreenTableCell>Card NickName</GreenTableCell>
            <GreenTableCell>Card Number</GreenTableCell>
            <GreenTableCell>CVV</GreenTableCell>
            <GreenTableCell>Issue Date</GreenTableCell>
            <GreenTableCell>Expiry Date</GreenTableCell>
            <GreenTableCell>Zip Code</GreenTableCell>
            <GreenTableCell>Delete Card</GreenTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row, i) => (
            <TableRow key={i}>
              <GreenTableCell>
                <RadioGreen
                  checked={selectedCardId === row.cardId}
                  onChange={() => handleRadioChange(row.cardId,row.cardNickname,row)}
                />
              </GreenTableCell>
              <GreenTableCell>{row.cardNickname}</GreenTableCell>
              <GreenTableCell>{row.cardNumber}</GreenTableCell>
              <GreenTableCell>{row.cvv}</GreenTableCell>
              <GreenTableCell>{row.issueDate}</GreenTableCell>
              <GreenTableCell>{row.expiryDate}</GreenTableCell>
              <GreenTableCell>{row.zip}</GreenTableCell>
              <GreenTableCell onClick={() => deleteCard(row.cardId)}>
                <DeleteOutlineIcon />
              </GreenTableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </Container>
  );
}

export default Stickyheadtable;
