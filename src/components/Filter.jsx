function Filter({ setFilter, text }) {
  return (
    <div className="buttons">
      <button onClick={() => setFilter("all")}>{text.all}</button>
      <button onClick={() => setFilter("income")}>{text.income}</button>
      <button onClick={() => setFilter("expense")}>{text.expense}</button>
    </div>
  );
}

export default Filter;