import React from "react";
import { CiSearch } from "react-icons/ci";

function Shearch() {
  return (
    <div>
      <div className="relative flex items-center">
        <CiSearch className="absolute ml-2" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-secondary rounded-3xl md:w-44 w-[350px] py-2 pl-10 "
        />
      </div>
    </div>
  );
}

export default Shearch;
