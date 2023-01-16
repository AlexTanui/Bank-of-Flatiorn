import React, { useState, useEffect } from "react";

function PostForm() {
  // const url =""
  const [data, setData] = useState({
    cartegory: "",
      description: "",
      amount: "",
      date: "",
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const addTransaction = {
    add: {
      cartegory: cartegory,
      description: description,
      amount: amount,
      date: date,
    },
  };
  fetch("https://api.npoint.io/13a31eb700e6e889ce8e/transactions/", {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(addTransaction),
  })
    .then((r) => r.json())
    .then((data) => console.log(data.transactions));
}

function Table({
  list,
  colNames,
  pageNum = 0,
  pageSize = 10,
  width = "100%",
  height = "auto",
}) {
  const [searchTitle, setSearchTitle] = useState("");
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/13a31eb700e6e889ce8e/transactions/")
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  }, []);

  return (
    <>
      <h3>Search Filter</h3>
      <input
        id="input-search"
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div style={{ MarginLeft: "50px", width, boxShadow: "3px 6px 3px #ccc" }}>
        <i id="search-icon" class="fa fa-search" aria-hidden="true"></i>
        <table id="table" className="table table-primary table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Cartegory</th>
              <th scope="col">Description</th>
              <th scope="col">Amount Ksh.</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody className="table-succes">
            <tr>
              <th scope="row">
                <td>
                  {transactions.map((transactions) => (
                    <tr key={transactions.id}>{transactions.id}</tr>
                  ))}
                </td>
              </th>

              <td>
                {transactions.map((transactions) => (
                  <tr key={transactions.id}>{transactions.category}</tr>
                ))}
              </td>
              <td>
                {transactions
                  .filter((value) => {
                    if (searchTitle === "") {
                      return value;
                    } else if (value.description.includes(searchTitle)) {
                      return value;
                    }
                  })
                  .map((transactions) => (
                    <tr key={transactions.id}>{transactions.description}</tr>
                  ))}
              </td>
              <td>
                {transactions.map((transactions) => (
                  <tr key={transactions.id}>{transactions.amount}</tr>
                ))}
              </td>
              <td>
                {transactions.map((transactions) => (
                  <tr key={transactions.id}>{transactions.date}</tr>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3 d-inline-flex">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Cartegory
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
          <span className="input-group-text" id="inputGroup-sizing-default">
            Description
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
          <span className="input-group-text" id="inputGroup-sizing-default">
            Amount
          </span>
          <input
            type="number"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
          <span className="input-group-text" id="inputGroup-sizing-default">
            Date
          </span>
          <input
            type="date"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          ></input>
          <button
            onClick={handleSubmit}
            type="button"
            className="btn btn-secondary"
          >
            Add
          </button>
        </div>
      </form>
    </>
  );
}

export default Table;
