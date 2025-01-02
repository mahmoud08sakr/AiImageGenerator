import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  return (
    <div className="container w-50">
      <div className="input-group">
        <span className="input-group-text search-icon mx-4 rounded">
          <FontAwesomeIcon icon={faSearch} />
        </span>
        <input
          type="text"
          className="form-control rounded"
          placeholder="Search with prompts or name ..."
        />
      </div>
    </div>
  );
}
