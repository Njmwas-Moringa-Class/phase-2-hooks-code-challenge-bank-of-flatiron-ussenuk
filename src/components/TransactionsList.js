import React from "react";
import Transaction from "./Transaction";

function TransactionsList({search, transactions, setTransactions}) {


  const filteredTransactions = transactions ? transactions.filter(item => item.description.includes(search)) : [];
  // add this callback function

  // display the transactionList

  const transactionList = filteredTransactions.map((item)=>{ 
    return(
    <Transaction

      key={item.id}
      transaction={item}
    />
    )
  })
    
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        { transactionList }
      </tbody>
    </table>
  );
}

export default TransactionsList;
