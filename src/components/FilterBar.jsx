import { FILTERS } from "../constants";
import "./FilterBar.css";

export default function FilterBar({
  search,
  setSearch,
  filter,
  setFilter,
}) {
  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="🔍 ابحث عن مهمة..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="filter-buttons">
        {FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={
              filter === item
                ? "filter-btn active"
                : "filter-btn"
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}