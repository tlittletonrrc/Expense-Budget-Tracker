import "./accountsOverview.css";

function AccountsOverview() {
  const accounts = [
    {
      id: 1,
      name: "Checking",
      transactions: [
        { id: 1, label: "coffee", amount: -10 },
        { id: 2, label: "lunch", amount: -18.5 },
        { id: 3, label: "groceries", amount: -72.19 },
      ],
    },
    {
      id: 2,
      name: "Savings",
      transactions: [
        { id: 4, label: "paycheck", amount: 500 },
        { id: 5, label: "interest", amount: 12.45 },
      ],
    },
  ];

  return (
    <ul className="accounts-list">
      {accounts.map((account) => (
        <li key={account.id} className="account-item">
          <p className="account-name">{account.name}</p>

          <ul className="transactions-list">
            {account.transactions.map((tx) => (
              <li key={tx.id} className="transaction-item">
                {tx.label}
                <span className={tx.amount >= 0 ? "positive" : "negative"}>
                  {tx.amount >= 0 ? "+" : "-"}$
                  {Math.abs(tx.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default AccountsOverview;
