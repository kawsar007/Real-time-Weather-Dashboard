import { useState } from "react";

import Favourite from "./favourite";
import FavouriteListModal from "./favourite-list-modal";
import Search from "./search";
import Logo from "/src/assets/logo.svg";

const Header = () => {
  const [showFavModal, setShowFavModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <a href="#">
          <img src={Logo} alt="Weather App" />
        </a>

        <div className="flex items-center gap-4 relative">
          <Search />
          <Favourite onShow={() => setShowFavModal(!showFavModal)} />

          {/* Modal */}
          {showFavModal && <FavouriteListModal />}
          {/* <FavouriteListModal /> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
