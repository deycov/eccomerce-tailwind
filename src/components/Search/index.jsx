import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useContext } from "react";
import { ShopiStorage } from "../../hooks/useContextShopi";

function Search() {
  const {searchValue, setSearchValue} = useContext(ShopiStorage);

  return(
    <div className="m-auto w-2/5 flex items-center ">
      <MagnifyingGlassIcon className="absolute ml-3  w-6" />
      <input type="text"
        className="px-10 py-2 w-full border-black border-2 rounded-sm hover:border-blue-400 focus:border-blue-600 hover:text-black focus:outline-none"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        placeholder="Busca la prenda que deseas encontrar"
        />
    </div>
  )

}

export default Search;