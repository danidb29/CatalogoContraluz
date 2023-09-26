import React from "react";
import "./SearchBar.css";
import { useState } from "react";

export const SearchBar = () => {
  return (
    <div className="bar">
      <div className="content">
        <input type="text" placeholder="Busqueda...." />
        <button>
          <i className="ri-search-line"></i>
        </button>
      </div>
    </div>
  );
};
