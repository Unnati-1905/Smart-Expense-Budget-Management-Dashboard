import { useMemo } from "react";

function BudgetCard({ expenses, budget, setBudget }) {
  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const remaining = budget - totalExpense;

  return (
    <div className="card">
      <h3>Monthly Budget</h3>

      <input
        type="number"
        placeholder="Set Budget"
        value={budget}
        onChange={(e) => setBudget(Number(e.target.value))}
      />

      <p>Total Expense: ₹ {totalExpense}</p>
      <p>Remaining: ₹ {remaining}</p>

      {remaining < 0 && (
        <p style={{ color: "red" }}>⚠ Budget Exceeded!</p>
      )}
    </div>
  );
}

export default BudgetCard;
