import { categories } from "../utils/helpers";

function Filters({ filters, setFilters }) {
  return (
    <div className="card">
      <h3>Filters</h3>

      <select
        value={filters.category}
        onChange={(e) =>
          setFilters({ ...filters, category: e.target.value })
        }
      >
        <option value="All">All</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search by title"
        value={filters.search}
        onChange={(e) =>
          setFilters({ ...filters, search: e.target.value })
        }
      />
    </div>
  );
}

export default Filters;
