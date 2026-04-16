function Summary({ transactions, text }) {
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = income - expense;

  return (
    <div className="summary">
      <div className="card">
        <h3>{text.incomeTotal}</h3>
        <p>${income}</p>
      </div>

      <div className="card">
        <h3>{text.expenseTotal}</h3>
        <p>${expense}</p>
      </div>

      <div className="card">
        <h3>{text.balance}</h3>
        <p>${balance}</p>
      </div>
    </div>
  );
}

export default Summary;