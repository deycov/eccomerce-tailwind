import React, { useContext } from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

function Search() {
  const {searchValue, setSearchValue} = useContext(ShopiStorage);

  return(
    <div className="m-auto w-2/5 flex items-center">
      <div className="absolute ml-3">🔎</div>
      <input type="text"
        className="px-10 py-2 w-full border-black border-2 rounded-sm hover:border-blue-600 focus:border-blue-400 focus:outline-none"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        placeholder="Busca la prenda que deseas encontrar"
        />
    </div>
  )

}

export default Search;