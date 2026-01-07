import { useState } from "react";

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const startEdit = (expense) => {
    setEditingId(expense.id);
    setEditData(expense);
  };

  const saveEdit = () => {
    onEditExpense(editData);
    setEditingId(null);
  };

  return (
    <div className="card">
      <h3>All Expenses</h3>

      {expenses.length === 0 && <p>No expenses yet</p>}

      {expenses.map((expense) => (
        <div
          key={expense.id}
          style={{
            display: "flex",
            gap: "8px",
            padding: "8px",
            borderBottom: "1px solid #ddd",
            alignItems: "center",
          }}
        >
          {editingId === expense.id ? (
            <>
              <input
                value={editData.title}
                onChange={(e) =>
                  setEditData({ ...editData, title: e.target.value })
                }
              />
              <input
                type="number"
                value={editData.amount}
                onChange={(e) =>
                  setEditData({
                    ...editData,
                    amount: Number(e.target.value),
                  })
                }
              />
              <button onClick={saveEdit}>Save</button>
            </>
          ) : (
            <>
              <span>{expense.title}</span>
              <span>₹ {expense.amount}</span>
              <span>{expense.category}</span>
              <span>{expense.date}</span>

              <button onClick={() => startEdit(expense)}>Edit</button>
              <button onClick={() => onDeleteExpense(expense.id)}>
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
