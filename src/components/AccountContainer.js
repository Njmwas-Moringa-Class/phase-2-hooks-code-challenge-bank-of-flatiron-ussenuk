import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, setTransactions}) {

  const [formData, setFormData]= useState({
    date:"",
    description:"",
    category:"",
    amount:0, // initialize amount as a number
  });

  const [search, setSearch] = useState("");



  function handleChange(event){
    // name is the KEY in the formData object we're trying to update

    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]:value,
    });

  }

  function handleSubmit(event){
    event.preventDefault();
    const newTransaction = {
      "date": formData.date,
      "description": formData.description,
      "category": formData.category,
      "amount": Number(formData.amount), // convert amount to a number
    };

    fetch("http://localhost:8001/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTransaction),
  })
  .then((r)=> r.json())
  .then((newItem) => setTransactions([...transactions, newItem]));

}


    // Add the new item to the items list
    // setTransactions([...transactions, newTransaction]);



  return (
    <div>
      <Search search={search} onSearchChange={setSearch}/>
      <AddTransactionForm transactions={transactions} setTransactions={setTransactions} handleSubmit={handleSubmit} formData={formData} handleChange={handleChange}/>
      <TransactionsList search={search} transactions={transactions} setTransactions={setTransactions}/>
    </div>
  );
}

export default AccountContainer;
