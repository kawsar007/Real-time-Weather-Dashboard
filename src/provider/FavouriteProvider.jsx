/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({ children }) => {
  const [favourites, setFavorites] = useLocalStorage("favourites", []);

  const addToFavourites = (latitude, longitude, location) => {
    setFavorites([
      ...favourites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavourites = (location) => {
    const restFavourites = favourites.filter(
      (fav) => fav.location !== location
    );
    setFavorites(restFavourites);
  };

  return (
    <FavouriteContext.Provider
      value={{ addToFavourites, removeFromFavourites, favourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
