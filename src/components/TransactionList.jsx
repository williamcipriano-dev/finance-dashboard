function TransactionList({ transactions, text }) {
  return (
    <ul>
      {transactions.map((t) => (
        <li key={t.id}>
          {text[t.name]} - ${t.amount} ({text[t.type]})
        </li>
      ))}
    </ul>
  );
}

export default TransactionList;