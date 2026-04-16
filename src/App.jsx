import { useState } from "react";
import data from "./data/transactions.json";
import translations from "./data/translations";

import TransactionList from "./components/TransactionList";
import Filter from "./components/Filter";
import Summary from "./components/Summary";
import Chart from "./components/Chart";

function App() {
  const [transactions] = useState(data);
  const [filter, setFilter] = useState("all");
  const [language, setLanguage] = useState("pt");

  const text = translations[language];

  const filteredTransactions =
    filter === "all"
      ? transactions
      : transactions.filter((item) => item.type === filter);

  return (
    <div className="container">
      <div className="top-bar">
        <h1>{text.title}</h1>

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="pt">Português</option>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>

      <Summary transactions={transactions} text={text} />

      <Filter setFilter={setFilter} text={text} />

      <div className="list">
        <TransactionList
          transactions={filteredTransactions}
          text={text}
        />
      </div>

      <Chart transactions={transactions} text={text} />

      <footer className="footer">
        <p>© 2026 William Cipriano</p>

        <span>Front-End Developer • React • JavaScript</span>

        <div className="footer-links">
          <a
            href="https://github.com/williamcipriano-dev"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/william-cipriano-b44870383"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;