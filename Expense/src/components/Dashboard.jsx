import { useMemo } from "react";

function Dashboard({ expenses }) {
  const total = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const recent = [...expenses].slice(-5).reverse();

  return (
    <div className="card">
      <h3>Dashboard</h3>
      <p>Total Expenses: ₹ {total}</p>

      <h4>Recent Transactions</h4>
      {recent.length === 0 && <p>No recent transactions</p>}

      {recent.map((e) => (
        <div key={e.id}>
          {e.title} - ₹ {e.amount}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
