import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, handlePage, page, nbPages } = useGlobalContext();
  return (
    <div className="btn-container">
      <button
        disabled={isLoading || page === 0}
        onClick={() => handlePage(false)}
      >
        prev
      </button>
      <p>
        <input
          className="search-page"
          type="number"
          value={page}
          onChange={(e) => handlePage(e.target.value)}
        />
        of {nbPages}
      </p>
      <button
        disabled={isLoading || page + 1 === nbPages}
        onClick={() => handlePage(true)}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
