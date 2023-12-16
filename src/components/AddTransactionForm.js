import React from "react";

function AddTransactionForm({handleSubmit,handleChange, formData}) {


  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input 
          type="date" 
          name="date"
          onChange={handleChange}
          value={formData.date} 
          />
          <input 
          type="text" 
          name="description" 
          placeholder="Description"
          onChange={handleChange}
          value={formData.description} 
          />
          <input 
          type="text" 
          name="category" 
          placeholder="Category"
          onChange={handleChange}
          value={formData.category} 
          />
          <input 
          type="number" 
          name="amount" 
          placeholder="Amount" 
          step="0.01" 
          onChange={handleChange}
          value={formData.amount}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
