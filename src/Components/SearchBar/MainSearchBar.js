import { useState } from "react";

function SearchBar(items) {
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    const value = e.target.value;
    setSearch(value);
    items.search(value);
  }

  return (
    <div className="bg-light">
      <input
        value={search}
        onChange={handleInputChange}
        type="text"
        placeholder="Search"
        className="form-control me-4"
      />

      {/* <select className="form-select">
                <option value="asc">Location A-Z</option>
                <option value="desc">Location Z-A</option>
            </select> */}
    </div>
  );
}

export default SearchBar;
