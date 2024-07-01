import { useContext } from "react";
import searchSvg from "../../assets/search.svg";
// import { locationContext } from "../../context";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";

const Search = () => {
  const { setSelectedLocation } = useContext(LocationContext);

  const doSearch = useDebounce((term) => {
    const fetchedLocation = getLocationByName(term);
    console.log("fetchedLocation--->", fetchedLocation);
    setSelectedLocation({ ...fetchedLocation });
  }, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    doSearch(value);
  };

  return (
    <form action="#">
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          type="search"
          className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          placeholder="Search Location"
          onChange={handleChange}
          required
        />
        <button type="submit">
          <img src={searchSvg} alt="Search" />
        </button>
      </div>
    </form>
  );
};

export default Search;
