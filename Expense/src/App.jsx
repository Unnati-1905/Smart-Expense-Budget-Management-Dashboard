import { useState, useMemo } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Filters from "./components/Filters";
import BudgetCard from "./components/BudgetCard";
import Dashboard from "./components/Dashboard";

function App() {
  const [expenses, setExpenses] = useLocalStorage("expenses", []);
  const [budget, setBudget] = useLocalStorage("budget", 0);

  const [filters, setFilters] = useState({
    category: "All",
    search: "",
  });

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const editExpense = (updatedExpense) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === updatedExpense.id ? updatedExpense : e))
    );
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((e) => {
      if (filters.category !== "All" && e.category !== filters.category)
        return false;
      if (
        filters.search &&
        !e.title.toLowerCase().includes(filters.search.toLowerCase())
      )
        return false;
      return true;
    });
  }, [expenses, filters]);

  return (
    <div className="container">

      <h1>💰 Smart Expense & Budget Dashboard</h1>

      <Dashboard expenses={expenses} />

      <BudgetCard
        expenses={expenses}
        budget={budget}
        setBudget={setBudget}
      />

      <ExpenseForm onAddExpense={addExpense} />

      <Filters filters={filters} setFilters={setFilters} />

      <ExpenseList
        expenses={filteredExpenses}
        onDeleteExpense={deleteExpense}
        onEditExpense={editExpense}
      />
    </div>
  );
}

export default App;
