import React from 'react';
import TransactionData from '../../data/Transactions.json';
import './TransactionList.css';

const TransactionList = () => {
  const DisplayData = TransactionData.map(info => {
    return (
      <tr key={info.transaction_Date_Time}>
        <td>{info.transaction_Date_Time}</td>
        <td className="amount-column">{info.amount}</td>
        <td>{info.transaction_Type}</td>
        <td>{info.notes}</td>
        <td>{info.product_Category}</td>
        <td>{info.is_Fraudulent}</td>
      </tr>
    );
  });

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Transaction Date and time</th>
            <th className="amount-column">Amount</th>
            <th>Type</th>
            <th>Notes</th>
            <th>Category</th>
            <th>Is fraudulent?</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
};

export default TransactionList;
